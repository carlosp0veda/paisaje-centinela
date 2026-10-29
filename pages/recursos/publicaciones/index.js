import {useState, useMemo, useReducer} from 'react'
import styles from './publicaciones.module.css'
import {Config} from '../../../utils/config'
import {getPublicaciones} from '../../../utils/contentful'
import CustomBreadcrumbs from '../../../components/breadcrumbs/CustomBreadcrumbs'
import PageHeader from '../../../components/pageHeader/pageHeader'
import Publicacion from '../../../components/publicacion/publicacion'
import Pagination from '../../../components/pagination/pagination'
import reducer from '../../../store/reducer'
import {ACTIONS} from '../../../store/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Marcas diacríticas combinantes (U+0300–U+036F)
const DIACRITICOS = new RegExp(`[${String.fromCharCode(0x300)}-${String.fromCharCode(0x36f)}]`, 'g')

// Normaliza para buscar sin distinguir mayúsculas ni tildes
const normalizar = (texto = '') => texto.normalize('NFD').replace(DIACRITICOS, '').toLowerCase()

// Agrupa variantes de una misma categoría (espacios, mayúsculas, tildes, plurales)
const claveCategoria = (c) => normalizar(c).trim().replace(/\s+/g, ' ').replace(/s\b/g, '')

const tieneTilde = (c) => c !== c.normalize('NFD').replace(DIACRITICOS, '')

const PublicacionesPage = (props) => {

  const [state, dispatch] = useReducer(reducer, props)
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState(null)
  const pageSize = Config.pagination.pageSize

  // [{clave, etiqueta}] usando la variante más frecuente (con tilde si empata) como etiqueta
  const categorias = useMemo(() => {
    const grupos = {}
    state.publicaciones.items.flatMap(p => p.categoria ?? []).forEach(c => {
      const etiqueta = c.trim().replace(/\s+/g, ' ')
      const clave = claveCategoria(etiqueta)
      grupos[clave] = grupos[clave] ?? {}
      grupos[clave][etiqueta] = (grupos[clave][etiqueta] ?? 0) + 1
    })
    return Object.entries(grupos).map(([clave, variantes]) => {
      const [etiqueta] = Object.entries(variantes).sort(([a, na], [b, nb]) => nb - na || tieneTilde(b) - tieneTilde(a))[0]
      return {clave, etiqueta}
    }).sort((a, b) => a.etiqueta.localeCompare(b.etiqueta, 'es'))
  }, [state.publicaciones.items])

  const filtradas = useMemo(() => {
    const q = normalizar(busqueda.trim())
    return state.publicaciones.items.filter(p => {
      if (categoria && !(p.categoria ?? []).some(c => claveCategoria(c) === categoria)) return false
      if (q && !normalizar(p.titulo).includes(q)) return false
      return true
    })
  }, [state.publicaciones.items, busqueda, categoria])

  const totalPages = Math.max(1, Math.ceil(filtradas.length / pageSize))
  const currentPage = Math.min(state.currentPage ?? 1, totalPages)
  const initialIndex = (currentPage - 1) * pageSize
  const paginatedPage = filtradas.slice(initialIndex, initialIndex + pageSize)

  const nextDisabled = currentPage === totalPages
  const prevDisabled = currentPage === 1

  const onBuscar = (e) => {
    setBusqueda(e.target.value)
    dispatch({type: ACTIONS.RESET})
  }

  const onCategoria = (c) => {
    setCategoria(prev => prev === c ? null : c)
    dispatch({type: ACTIONS.RESET})
  }

    return (
        <main>
        <CustomBreadcrumbs/>
        <PageHeader eyebrow="recursos" titulo="Publicaciones" count={state.publicaciones.items.length} descripcion="Informes, documentos técnicos y artículos generados en el Paisaje Centinela.">
          <div className={styles.filtros}>
            <label className={styles.buscador}>
              <FontAwesomeIcon icon={faSearch} className={styles.buscadorIcon}/>
              <span className="visually-hidden">Buscar publicaciones</span>
              <input type="search" placeholder="Buscar por título…" value={busqueda} onChange={onBuscar}/>
            </label>
            {categorias.length > 0 && (
              <div className={styles.chips} role="group" aria-label="Filtrar por categoría">
                <button type="button" className={[styles.chip, !categoria ? styles.chipActive : ''].join(' ')} aria-pressed={!categoria} onClick={() => onCategoria(null)}>Todas</button>
                {categorias.map(c => (
                  <button key={c.clave} type="button" className={[styles.chip, categoria === c.clave ? styles.chipActive : ''].join(' ')} aria-pressed={categoria === c.clave} onClick={() => onCategoria(c.clave)}>{c.etiqueta}</button>
                ))}
              </div>
            )}
          </div>
        </PageHeader>
         <div className="container page-body">
            <p className={styles.resultados} aria-live="polite">
              {filtradas.length} {filtradas.length === 1 ? 'resultado' : 'resultados'}{categoria ? ` en “${categorias.find(c => c.clave === categoria)?.etiqueta}”` : ''}{busqueda.trim() ? ` para “${busqueda.trim()}”` : ''}
            </p>
            {paginatedPage.length > 0 ? (
              <div className={styles.publicaciones}>{
              paginatedPage.map((publicacion) => ( <Publicacion key={publicacion.sys.id} badge={publicacion.categoria} date={publicacion.aoDePublicacin} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</Publicacion>))
              }
              </div>
            ) : (
              <div className={styles.vacio}>
                <p>No encontramos publicaciones con esos criterios.</p>
                <button type="button" className={styles.chip} onClick={() => { setBusqueda(''); setCategoria(null); dispatch({type: ACTIONS.RESET}) }}>Limpiar filtros</button>
              </div>
            )}
            {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} nextDisabled={nextDisabled} prevDisabled={prevDisabled} dispatch={dispatch} />}
          </div>
        </main>
    )
}

export const getStaticProps = async () => {

  const data = await getPublicaciones();
  const totalPages = Math.ceil(data.publicacionesCollection.total / Config.pagination.pageSize);

    return{
      props: {
      publicaciones: data.publicacionesCollection,
      totalPages,
      currentPage: 1
      },
      revalidate: 300
    }
}

export default PublicacionesPage
