import Link from 'next/link'
import { getArticulos, getArticulo } from "../../../utils/contentful";
import styles from './articulo.module.css'
import Hero from '../../../components/hero/hero'
import Card from '../../../components/card/card'
import Header3 from '../../../components/UI/header3/header3'
import CustomBreadcrumbs from '../../../components/breadcrumbs/CustomBreadcrumbs'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS} from '@contentful/rich-text-types'
import {minutosDeLectura} from '../../../utils/richText'


function ArticuloPage({articulo, relacionados, minutos}) {
    const RICHTEXT_OPTIONS = {
      renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (<p className={styles.contenido}>{children}</p>)
      }
      }
    }

    return (
      <main>
        <CustomBreadcrumbs/>
        <Hero fotoURL={articulo[0].imagen?.url} date={articulo[0].sys.firstPublishedAt} meta={`${minutos} min de lectura`} eyebrow="Artículo">{articulo[0].titulo}</Hero>
        <section className={`container ${styles.contenidoWrapper}`}>
          <aside className={styles.publicador}>
            {articulo[0].publicador && (
              <div className={styles.metaItem}>
                <p className={styles.label}>Publicado por</p>
                <Link href={`/investigadores/${articulo[0].publicador.slug}`} className={styles.link}>{articulo[0].publicador.nombre}</Link>
              </div>
            )}
            <div className={styles.metaItem}>
              <p className={styles.label}>Lectura</p>
              <p className={styles.metaValue}>{minutos} min</p>
            </div>
            <Link href='/articulos' className={styles.volver}>← Todos los artículos</Link>
          </aside>
          <article className={styles.copy}>
          {documentToReactComponents(articulo[0].contenido.json, RICHTEXT_OPTIONS)}
          </article>
        </section>
        {relacionados.length > 0 && (
          <section className="container">
            <Header3>Más artículos<Link href='/articulos'>Ver todos</Link></Header3>
            <div className={styles.relacionados}>
              {relacionados.map(r => <Card key={r.sys.id} date={r.sys.firstPublishedAt} fotoURL={r.imagen?.url} url={`/articulos/${encodeURIComponent(r.slug)}`}>{r.titulo}</Card>)}
            </div>
          </section>
        )}
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
  const dataArticulos = await getArticulos()
  const relacionados = dataArticulos.articuloCollection.items.filter(a => a.slug !== context.params.slug).slice(0, 3)


    return{
      props: {
        articulo: data.articuloCollection.items,
        relacionados,
        minutos: minutosDeLectura(data.articuloCollection.items[0]?.contenido?.json),
      },
      revalidate: 300
    }
}

export default ArticuloPage
