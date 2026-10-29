import styles from './presentaciones.module.css'
import {getPresentaciones} from '../../../utils/contentful'
import CustomBreadcrumbs from '../../../components/breadcrumbs/CustomBreadcrumbs'
import PageHeader from '../../../components/pageHeader/pageHeader'
import Presentacion from '../../../components/presentacion/presentacion'

const PresentacionesPage = ({presentaciones}) => {
    return (
        <main>
        <CustomBreadcrumbs/>
         <PageHeader eyebrow="recursos" titulo="Presentaciones" count={presentaciones.length} descripcion="Presentaciones del equipo disponibles para consulta en línea."/>
         <div className="container page-body">
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
      revalidate: 300
    }
}

export default PresentacionesPage
