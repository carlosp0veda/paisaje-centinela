import { getArticulos, getArticulo } from "../../../utils/contentful";
import styles from './articulo.module.css'
import Hero from '../../../components/hero/hero'
import CustomBreadcrumbs from '../../../components/breadcrumbs/CustomBreadcrumbs'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS, INLINES} from '@contentful/rich-text-types'


function ArticuloPage({articulo}) {
    const RICHTEXT_OPTIONS = {
      renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (<p className={styles.contenido}>{children}<br/><br/></p>)
      }
      }
    }

    return (
      <main>
        <CustomBreadcrumbs/>
        <Hero fotoURL={articulo[0].imagen?.url} width={articulo[0].imagen?.width} height={articulo[0].imagen?.height} date={articulo[0].sys.firstPublishedAt}>{articulo[0].titulo}</Hero>
        <section className={styles.contenidoWrapper}>
        <div>
          <p><strong>PUBLICADO POR:</strong></p>
          <p>{articulo[0].publicador.nombre}</p>

        </div>
        <div>
        {documentToReactComponents(articulo[0].contenido.json, RICHTEXT_OPTIONS)}
        </div>
        </section>
      </main>
    )

}


export async function getStaticPaths() {

    const data = await getArticulos()
    

  return {
    paths: data.articuloCollection.items.map(item => ({params:{slug:item.slug}}))
    ,
    fallback: "blocking"
  };
}

export const getStaticProps = async (context) => {


  const data = await getArticulo(context.params.slug)


    return{
      props: {articulo: data.articuloCollection.items},
      revalidate: 900
    }
}

export default ArticuloPage