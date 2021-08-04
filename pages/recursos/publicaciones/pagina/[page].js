import styles from '../publicaciones.module.css'
import {getPublicaciones, getPaginatedPublicaciones, getTotalPublicaciones} from '../../../../utils/contentful'
import {Config} from '../../../../utils/config'
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadcrumbs'
import Header3 from '../../../../components/UI/header3/header3'
import Publicacion from '../../../../components/publicacion/publicacion'
import Pagination from '../../../../components/publicacion/pagination/pagination'

const PaginatedPublicacionesPage = ({publicaciones, totalPages, currentPage}) => {
  console.log(publicaciones, totalPages, currentPage)

  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

    return (
        <main>
        <CustomBreadcrumbs customActiveItemClassName={styles.activeItem}/>
         <div className={styles.publicacionesGrid}>
            <Header3>Publicaciones</Header3>
            <div className={styles.publicaciones}>
            {publicaciones.map((publicacion) => ( <Publicacion key={publicacion.sys.id} date={publicacion.aoDePublicacin} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</Publicacion>)
            )}
            </div>
             <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
          </div>
        </main>
    )
}

export const getStaticProps = async ({params}) => {

  const totalPublicaciones = await getPaginatedPublicaciones(params.page);
  const totalPages = Math.ceil(totalPublicaciones.total / Config.pagination.pageSize);

 

    return{
      props: {
      publicaciones: totalPublicaciones.items,
      totalPages,
      currentPage: params.page
      },
      revalidate: 900      
    }
}

export const getStaticPaths = async () => {
  const totalPublicaciones = await getTotalPublicaciones();
  const totalPages = Math.ceil(totalPublicaciones / Config.pagination.pageSize);

  const paths = [];

  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export default PaginatedPublicacionesPage

