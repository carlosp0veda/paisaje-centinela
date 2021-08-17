import { getPublicacion, getPublicaciones } from "../../../../utils/contentful";
import Head from 'next/head'
import styles from './publicacion.module.css'
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadcrumbs'
import Hero from '../../../../components/hero/hero'
import Header4 from '../../../../components/UI/header4/header4'
import Badge from '../../../../components/UI/badge/badge'
import Pdf from '../../../../components/pdf/pdf'
import Autor from '../../../../components/autor/autor'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS } from '@contentful/rich-text-types'


function PublicacionPage({publicacion}) {

    const RICHTEXT_OPTIONS = {
      renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (<p>{children}<br/><br/></p>)
      }
      }
    }

    return (
      <main>
            <CustomBreadcrumbs  />
            <Hero fotoURL={publicacion[0].foto?.url} width={publicacion[0].foto?.width} height={publicacion[0].foto?.height} date={publicacion[0].sys.firstPublishedAt}>{publicacion[0].titulo}</Hero>
            <section className={styles.body}>
              <Pdf className={styles.test} date={publicacion[0].aoDePublicacin} pdfThumbnail={publicacion[0].fotoPdf?.url} titulo={publicacion[0].titulo} pdfUrl={publicacion[0].pdfCollection.items[0].url}/>

              <div className={styles.resumen}>
                {documentToReactComponents(publicacion[0].resumen.json, RICHTEXT_OPTIONS)}
              </div>

              <div className={styles.rightPanel}>
                <div className={styles.autoresGrid}>
                  <Header4 className={styles.autoresTitle}>Autores</Header4>
                  <div className={styles.autores}>
                    {publicacion[0].autoresCollection.items.map(autor => <Autor key={autor.nombre} nombre={autor.nombre} url={`/investigadores/${encodeURIComponent(autor.slug)}`} foto={autor.foto}/>)}
                  </div>
                </div>
                <div>
                  <Header4>Categoría</Header4>
                  {publicacion[0].categoria?.map(c => <Badge key={c}>{c}</Badge>)}
                </div>
              </div>
            </section>

      </main>
      )

}


export async function getStaticPaths() {

    const data = await getPublicaciones()
    

  return {
    paths: data.publicacionesCollection.items.map(item => ({params:{slug:item.slug}}))
    ,
    fallback: 'blocking'
  };
}

export const getStaticProps = async (context) => {


  const data = await getPublicacion(context.params.slug)


    return{
      props: {publicacion: data.publicacionesCollection.items},
      revalidate: 300
    }
}

export default PublicacionPage