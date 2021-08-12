import styles from './presentaciones.module.css'
import {getPresentaciones} from '../../../utils/contentful'
import CustomBreadcrumbs from '../../../components/breadcrumbs/CustomBreadcrumbs'
import Header3 from '../../../components/UI/header3/header3'
import Presentacion from '../../../components/presentacion/presentacion'

const PresentacionesPage = ({presentaciones}) => {
    return (
        <main>
        <CustomBreadcrumbs/>
         <div className={styles.presentacionesGrid}>
            <Header3>Presentaciones</Header3>
            <div className={styles.presentaciones}>{
            presentaciones.map((presentacion) => ( <Presentacion key={presentacion.sys.id} date={presentacion.sys.firstPublishedAt} titulo={presentacion.tituloDePresentacion} pdfThumbnail={presentacion.capturaPortada?.url} url={`/recursos/presentaciones/${encodeURIComponent(presentacion.slug)}`} >{presentacion.tituloDePresentacion}</Presentacion>))
            }
            </div>
          </div>
        </main>
    )
}

export const getStaticProps = async () => {

  const data = await getPresentaciones();

    return{
      props: {
      presentaciones: data.presentacionesCollection.items,
      },
      revalidate: 900      
    }
}

export default PresentacionesPage
