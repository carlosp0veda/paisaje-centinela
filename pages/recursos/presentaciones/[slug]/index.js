import { getPresentacion, getPresentaciones } from "../../../../utils/contentful";
import styles from './presentacion.module.css'
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadcrumbs'
import Header4 from '../../../../components/UI/header4/header4'
import Hero from '../../../../components/hero/hero'
import Pdf from '../../../../components/pdf/pdf'
import Autor from '../../../../components/autor/autor'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS } from '@contentful/rich-text-types'


function PresentacionPage({presentacion}) {
    console.log(presentacion)
    const RICHTEXT_OPTIONS = {
      renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (<p>{children}<br/><br/></p>)
      }
      }
    }

    return (
      <main className={styles.mainWrapper}>
            <CustomBreadcrumbs  />
            <iframe src={`${presentacion[0].presentacion?.url}#view=fitH&toolbar=1`} type="application/pdf" width="100%" height='600px' className={styles.iframe} />
            {/* <Hero fotoURL={presentacion[0].capturaPortada?.url} width={presentacion[0].capturaPortada?.width} height={presentacion[0].capturaPortada?.height} date={presentacion[0].sys.firstPublishedAt}>{presentacion[0].tituloDePresentacion}</Hero> */}
            {/* <div className={styles.body}>
              <Pdf className={styles.test} date={publicacion[0].aoDePublicacin} pdfThumbnail={publicacion[0].fotoPdf?.url} titulo={publicacion[0].titulo} pdfUrl={publicacion[0].pdfCollection.items[0].url}/>

              <div className={styles.resumen}>
                {documentToReactComponents(publicacion[0].resumen.json, RICHTEXT_OPTIONS)}
              </div>

              <div className={styles.autoresGrid}>
                <h3 className={styles.autoresTitle}>Autores</h3>
                <div className={styles.autores}>
                  {publicacion[0].autoresCollection.items.map(autor => <Autor key={autor.nombre} nombre={autor.nombre} url={`/investigadores/${encodeURIComponent(autor.slug)}`} foto={autor.foto}/>)}
                </div>
              </div>
            </div> */}

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
      revalidate: 900
    }
}

export default PresentacionPage