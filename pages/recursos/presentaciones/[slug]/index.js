import { getPresentacion, getPresentaciones } from "../../../../utils/contentful";
import styles from './presentacion.module.css'
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadcrumbs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


function PresentacionPage({presentacion}) {
    const url = presentacion[0].presentacion?.url

    return (
      <main className={styles.mainWrapper}>
            <CustomBreadcrumbs  />
            <div className="container">
              <header className={styles.heading}>
                <div>
                  <p className={styles.eyebrow}>Presentación · {presentacion[0].sys.firstPublishedAt?.slice(0,4)}</p>
                  <h1 className={styles.titulo}>{presentacion[0].tituloDePresentacion}</h1>
                </div>
                {url && <a className={styles.download} href={url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDownload} className={styles.icon}/> Descargar PDF</a>}
              </header>
              <iframe src={`${url}#view=fitH&toolbar=1`} title={presentacion[0].tituloDePresentacion} className={styles.iframe} />
            </div>
      </main>)

}


export async function getStaticPaths() {

    const data = await getPresentaciones()


  return {
    paths: data.presentacionesCollection.items.map(item => ({params:{slug:item.slug}}))
    ,
    fallback: 'blocking'
  };
}

export const getStaticProps = async (context) => {


  const data = await getPresentacion(context.params.slug)


    return{
      props: {presentacion: data.presentacionesCollection.items},
      revalidate: 300
    }
}

export default PresentacionPage
