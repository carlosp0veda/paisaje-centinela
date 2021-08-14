import styles from './descripcion.module.css'
import Pdf from '../../components/pdf/pdf'
import Hero from '../../components/hero/hero'
import Header3 from '../../components/UI/header3/header3'
import {getPaisajeCentinela} from '../../utils/contentful'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS, INLINES} from '@contentful/rich-text-types'

function DescripcionPage({paisajeCentinela}) {

    const RICHTEXT_OPTIONS = {
      renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (<p>{children}<br/><br/></p>)
      },
      [BLOCKS.HEADING_3]:(node, children) => {
          return (<Header3>{children}</Header3>)
      }
      }
    }
    
    return (
        <main className={styles.contentWrapper}>
        <Hero fotoURL={paisajeCentinela[0].imagen?.url}>Paisaje Centinela (Nicaragua-Honduras)</Hero>
        <div className={styles.contenido}>
            {documentToReactComponents(paisajeCentinela[0].desarrolloDelContenido.json, RICHTEXT_OPTIONS)}
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
