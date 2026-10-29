import Link from 'next/link'
import styles from './recursos.module.css'
import {getBasesDeDatos, getPresentaciones, getPublicaciones} from '../../utils/contentful'
import CustomBreadcrumbs from '../../components/breadcrumbs/CustomBreadcrumbs'
import PageHeader from '../../components/pageHeader/pageHeader'
import Header3 from '../../components/UI/header3/header3'
import Publicacion from '../../components/publicacion/publicacion'
import Presentacion from '../../components/presentacion/presentacion'
import BaseDeDatos from '../../components/baseDeDatos/baseDeDatos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faChalkboard, faTable } from '@fortawesome/free-solid-svg-icons'



const RecursosPage = ({publicaciones, presentaciones, bds, totales}) => {

    const categorias = [
        { href: '/recursos/publicaciones', titulo: 'Publicaciones', descripcion: 'Informes, documentos técnicos y artículos en PDF.', total: totales.publicaciones, icon: faBook },
        { href: '/recursos/presentaciones', titulo: 'Presentaciones', descripcion: 'Presentaciones del equipo para consulta en línea.', total: totales.presentaciones, icon: faChalkboard },
        { href: '/recursos/bases-de-datos', titulo: 'Bases de datos', descripcion: 'Conjuntos de datos en Excel para descarga.', total: totales.bds, icon: faTable },
    ]

    return (
        <main>
        <CustomBreadcrumbs/>
        <PageHeader eyebrow="biblioteca" titulo="Recursos" descripcion="Publicaciones, presentaciones y bases de datos generadas en el Paisaje Centinela, disponibles para consulta y descarga.">
            <nav className={styles.categorias} aria-label="Tipos de recurso">
                {categorias.map(c => (
                    <Link key={c.href} href={c.href} className={styles.categoria}>
                        <span className={styles.categoriaIcon}><FontAwesomeIcon icon={c.icon}/></span>
                        <span className={styles.categoriaText}>
                            <strong>{c.titulo}</strong>
                            <span>{c.descripcion}</span>
                        </span>
                        <span className={styles.categoriaTotal}>{c.total}</span>
                    </Link>
                ))}
            </nav>
        </PageHeader>
         <div className="container page-body">
            <Header3>Publicaciones recientes<Link href='/recursos/publicaciones'>Ver todas</Link></Header3>
            <div className={styles.publicaciones}>{
            publicaciones.map((publicacion) => ( <Publicacion key={publicacion.sys.id} badge={publicacion.categoria} date={publicacion.aoDePublicacin} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</Publicacion>))
            }
            </div>
            <Header3>Presentaciones<Link href='/recursos/presentaciones'>Ver todas</Link></Header3>
            <div className={styles.presentaciones}>{
            presentaciones.map((presentacion) => ( <Presentacion key={presentacion.sys.id} date={presentacion.sys.firstPublishedAt} titulo={presentacion.tituloDePresentacion} pdfThumbnail={presentacion.capturaPortada?.url} url={`/recursos/presentaciones/${encodeURIComponent(presentacion.slug)}`} >{presentacion.tituloDePresentacion}</Presentacion>))
            }
            </div>
            <Header3>Bases de datos<Link href='/recursos/bases-de-datos'>Ver todas</Link></Header3>
            <div className={styles.files}>
            {bds.map(bd => (
              <BaseDeDatos key={bd.sys.id} nombre={bd.nombre} url={bd.archivoCollection.items[0]?.url}/>
              ))}
          </div>
        </div>
        </main>
    )
}

export const getStaticProps = async () => {

  const dataPublicaciones = await getPublicaciones();
  const dataPresentaciones = await getPresentaciones();
  const dataBD = await getBasesDeDatos()

    return{
      props: {
      publicaciones: dataPublicaciones.publicacionesCollection.items.slice(0,6),
      presentaciones: dataPresentaciones.presentacionesCollection.items.slice(0,4),
      bds: dataBD.basesDeDatosCollection.items.slice(0,6),
      totales: {
        publicaciones: dataPublicaciones.publicacionesCollection.total,
        presentaciones: dataPresentaciones.presentacionesCollection.items.length,
        bds: dataBD.basesDeDatosCollection.items.length,
      },
      },
      revalidate: 300
    }
}

export default RecursosPage
