import { getPublicacion, getPublicaciones } from "../../../../utils/contentful";
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
        return (<p>{children}</p>)
      }
      }
    }

    return (
      <main>
            <CustomBreadcrumbs  />
            <Hero fotoURL={publicacion[0].foto?.url} date={publicacion[0].sys.firstPublishedAt} eyebrow="Publicación">{publicacion[0].titulo}</Hero>
            <section className={`container ${styles.body}`}>
              <div className={styles.leftPanel}>
                <Pdf date={publicacion[0].aoDePublicacin} pdfThumbnail={publicacion[0].fotoPdf?.url} titulo={publicacion[0].titulo} pdfUrl={publicacion[0].pdfCollection.items[0]?.url}/>
              </div>

              <article className={styles.resumen}>
                <Header4>Resumen</Header4>
                {documentToReactComponents(publicacion[0].resumen.json, RICHTEXT_OPTIONS)}
              </article>

              <aside className={styles.rightPanel}>
                {publicacion[0].autoresCollection.items.length > 0 && (
                  <div>
                    <Header4>Autores</Header4>
                    <div className={styles.autores}>
                      {publicacion[0].autoresCollection.items.map(autor => <Autor key={autor.nombre} nombre={autor.nombre} url={`/investigadores/${encodeURIComponent(autor.slug)}`} foto={autor.foto}/>)}
                    </div>
                  </div>
                )}
                {publicacion[0].categoria?.length > 0 && (
                  <div>
                    <Header4>Categoría</Header4>
                    <div className={styles.badges}>
                      {publicacion[0].categoria.map(c => <Badge key={c}>{c}</Badge>)}
                    </div>
                  </div>
                )}
              </aside>
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
