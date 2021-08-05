import {useState} from 'react'
import styles from './publicaciones.module.css'
import {useRouter} from 'next/router'
import useSWR from 'swr'
import {gql, GraphQLClient} from 'graphql-request'
import {Config} from '../../../utils/config'
import {getPublicaciones, getPaginatedPublicaciones, getTotalPublicaciones, graphQLClient} from '../../../utils/contentful'
import CustomBreadcrumbs from '../../../components/breadcrumbs/CustomBreadcrumbs'
import Header3 from '../../../components/UI/header3/header3'
import Publicacion from '../../../components/publicacion/publicacion'
import Pagination from '../../../components/publicacion/pagination/pagination'




const PublicacionesPage = ({publicaciones, totalPages, currentPage}) => {

  const {totalP, setTotalPages} = useState(totalPages)
  const {currentP, setCurrentPage} = useState(currentPage)

    // const router = useRouter()
    // currentPage = router.query.page ?? '1'
    // const fetcher = async (currentPage) => await getPaginatedPublicaciones(currentPage)

    // const skipMultiplier = currentPage === 1 ? 0 : currentPage - 1;
    // const skip = skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;
    // const {data} = useSWR([gql`{
    //     publicacionesCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order:aoDePublicacin_DESC) {
    //       total
    //       items {
    //   titulo 
    //   slug
    //   foto {
    //       url
    //       width
    //       height
    //     }
    //   fotoPdf {
    //     url
    //     width
    //     height
    //   }
    //   aoDePublicacin
    //   sys {
    //     id
    //   }
    // }
    //     }
    //   }`, skip], fetcher, { initialData: publicaciones })

      

  
    const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
    const prevDisabled = parseInt(currentPage, 10) === 1;

    return (
        <main>
        <CustomBreadcrumbs/>
         <div className={styles.publicacionesGrid}>
            <Header3>Publicaciones</Header3>
            <div className={styles.publicaciones}>{
            publicaciones.map((publicacion) => ( <Publicacion key={publicacion.sys.id} date={publicacion.aoDePublicacin} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</Publicacion>))
            }
            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} nextDisabled={nextDisabled} prevDisabled={prevDisabled} />
          </div>
        </main>
    )
}

export const getStaticProps = async () => {

  const totalPublicaciones = await getPaginatedPublicaciones(1);
  const totalPages = Math.ceil(totalPublicaciones.total / Config.pagination.pageSize);

    return{
      props: {
      publicaciones: totalPublicaciones.items,
      totalPages,
      currentPage: '1'
      },
      revalidate: 900      
    }
}

export default PublicacionesPage
