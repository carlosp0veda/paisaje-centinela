import styles from './investigador.module.css'
import {getInvestigadores, getInvestigador} from '../../../utils/contentful'
import CustomBreadcrumbs from '../../../components/breadcrumbs/CustomBreadcrumbs'
import Publicacion from '../../../components/publicacion/publicacion'
import Header3 from '../../../components/UI/header3/header3'
import Header4 from '../../../components/UI/header4/header4'
import Image from 'next/image'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS, INLINES} from '@contentful/rich-text-types'


function InvestigadorPage({investigador}) {

    const publicacionesRecientes = investigador[0].linkedFrom.entryCollection.items.filter(publicacion => {
      if (publicacion.__typename === "Publicaciones") {
        return publicacion
      }
    })

    console.log(publicacionesRecientes)

    const RICHTEXT_OPTIONS = {
      renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (<p>{children}<br/><br/></p>)
      }
      }
    }
    
return (<main>
      <CustomBreadcrumbs/>
      <section className={styles.infoGrid}>
        <div className={styles.infoWrapper}>
          <h3 className={styles.nombre}>{investigador[0].nombre}</h3>
          <Image src={investigador[0].foto?.url} width={200} height={200}/>
          <Header4>ORGANIZACIÓN</Header4>
          <p>{investigador[0].organizacion}</p>
          <Header4>ESPECIALIDAD</Header4>
          <p>{investigador[0].rol}</p>
          <Header4>CONTACTO</Header4>
          <p>{investigador[0].correo}</p>
        </div>
        <div className={styles.infoDesarrollo}>
          {documentToReactComponents(investigador[0].descripcion?.json, RICHTEXT_OPTIONS)}
        </div>
      </section>

      <section>
        <Header3>Publicaciones</Header3>
        <div className={styles.publicaciones}>
            {publicacionesRecientes.map((publicacion) => ( <Publicacion key={publicacion.sys.id} date={publicacion.sys.publishedAt} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</Publicacion>)
            )}
            </div>
      </section>
      
</main>)

}


export async function getStaticPaths() {

    const data = await getInvestigadores()

    return {
    paths: data.autorCollection.items.map(item => ({params:{slug:item.slug}})),
    fallback: "blocking"
    };
}

export const getStaticProps = async (context) => {
  const data = await getInvestigador(context.params.slug)
    return{
      props: {investigador: data.autorCollection.items}
    }
}


export default InvestigadorPage