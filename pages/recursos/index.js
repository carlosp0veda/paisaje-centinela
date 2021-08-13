import Link from 'next/link'
import styles from './recursos.module.css'
import {getPresentaciones, getPublicaciones} from '../../utils/contentful'
import CustomBreadcrumbs from '../../components/breadcrumbs/CustomBreadcrumbs'
import Header3 from '../../components/UI/header3/header3'
import Publicacion from '../../components/publicacion/publicacion'
import Presentacion from '../../components/presentacion/presentacion'



const RecursosPage = ({publicaciones, presentaciones}) => {

    return (
        <main>
        <CustomBreadcrumbs/>
         <div className={styles.recursosGrid}>
            <Header3>Publicaciones<Link href='/recursos/publicaciones'><span>Ver todas...</span></Link></Header3>
            <div className={styles.publicaciones}>{
            publicaciones.map((publicacion) => ( <Publicacion key={publicacion.sys.id} date={publicacion.aoDePublicacin} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</Publicacion>))
            }
            </div>
            <Header3>Presentaciones<Link href='/recursos/presentaciones'><span>Ver todas...</span></Link></Header3>
            <div className={styles.presentaciones}>{
            presentaciones.map((presentacion) => ( <Presentacion key={presentacion.sys.id} date={presentacion.sys.firstPublishedAt} titulo={presentacion.tituloDePresentacion} pdfThumbnail={presentacion.capturaPortada?.url} url={`/recursos/presentaciones/${encodeURIComponent(presentacion.slug)}`} >{presentacion.tituloDePresentacion}</Presentacion>))
            }
            </div>
        </div>
        </main>
    )
}

export const getStaticProps = async () => {

  const dataPublicaciones = await getPublicaciones();
  const dataPresentaciones = await getPresentaciones();

    return{
      props: {
      publicaciones: dataPublicaciones.publicacionesCollection.items.slice(0,9),
      presentaciones: dataPresentaciones.presentacionesCollection.items.slice(0,9),
      },
      revalidate: 900      
    }
}

export default RecursosPage
