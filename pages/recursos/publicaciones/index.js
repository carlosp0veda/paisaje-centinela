import {useState, useEffect, useReducer} from 'react'
import styles from './publicaciones.module.css'
import {Config} from '../../../utils/config'
import {getPublicaciones} from '../../../utils/contentful'
import CustomBreadcrumbs from '../../../components/breadcrumbs/CustomBreadcrumbs'
import Header3 from '../../../components/UI/header3/header3'
import Publicacion from '../../../components/publicacion/publicacion'
import Pagination from '../../../components/pagination/pagination'
import reducer from '../../../store/reducer'


const PublicacionesPage = (props) => {

  const [state, dispatch] = useReducer(reducer, props)
  const pageSize = Config.pagination.pageSize
  const currentPage = state.currentPage ?? 1;
  const currentPageIndex = currentPage === 1 ? 0 : state.currentPage - 1;
  const initialIndex = currentPageIndex > 0 ? pageSize * currentPageIndex : 0;
  
  const paginatedPage = state.publicaciones.items.slice(initialIndex,initialIndex+pageSize)

  const nextDisabled = parseInt(state.currentPage, 10) === parseInt(state.totalPages, 10);
  const prevDisabled = parseInt(state.currentPage, 10) === 1;

    return (
        <main>
        <CustomBreadcrumbs/>
         <div className={styles.publicacionesGrid}>
            <Header3>Publicaciones</Header3>
            <div className={styles.publicaciones}>{
            paginatedPage.map((publicacion) => ( <Publicacion key={publicacion.sys.id} date={publicacion.aoDePublicacin} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</Publicacion>))
            }
            </div>
            <Pagination totalPages={state.totalPages} currentPage={state.currentPage} nextDisabled={nextDisabled} prevDisabled={prevDisabled} dispatch={dispatch} />
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
