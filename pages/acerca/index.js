import styles from './descripcion.module.css'
import Hero from '../../components/hero/hero'
import Header3 from '../../components/UI/header3/header3'
import {getPaisajeCentinela} from '../../utils/contentful'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS} from '@contentful/rich-text-types'

function DescripcionPage({paisajeCentinela}) {

    const RICHTEXT_OPTIONS = {
      renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (<p>{children}</p>)
      },
      [BLOCKS.HEADING_3]:(node, children) => {
          return (<Header3>{children}</Header3>)
      }
      }
    }

    return (
        <main className={styles.contentWrapper}>
        <Hero fotoURL={paisajeCentinela[0].imagen?.url} eyebrow="Acerca" narrow overlap>Paisaje Centinela (Nicaragua-Honduras)</Hero>
        <div className={`container ${styles.layout}`}>
            <article className={styles.contenido}>
                {paisajeCentinela[0].excerp && <p className={styles.lead}>{paisajeCentinela[0].excerp}</p>}
                {documentToReactComponents(paisajeCentinela[0].desarrolloDelContenido.json, RICHTEXT_OPTIONS)}
            </article>
        </div>
        </main>
    )
}

export const getStaticProps = async () => {

  const data = await getPaisajeCentinela()


    return{
      props: {
      paisajeCentinela: data.paisajeCentinelaCollection.items
      },
      revalidate: 300
    }
}

export default DescripcionPage
