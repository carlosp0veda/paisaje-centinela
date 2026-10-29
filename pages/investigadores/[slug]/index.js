import styles from './investigador.module.css'
import {getInvestigadores, getInvestigador} from '../../../utils/contentful'
import CustomBreadcrumbs from '../../../components/breadcrumbs/CustomBreadcrumbs'
import Publicacion from '../../../components/publicacion/publicacion'
import Header3 from '../../../components/UI/header3/header3'
import Header4 from '../../../components/UI/header4/header4'
import Image from 'next/image'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS} from '@contentful/rich-text-types'
import {imageOrNull} from '../../../utils/image'


function InvestigadorPage({investigador}) {

    const publicacionesRecientes = investigador[0].linkedFrom.entryCollection.items.filter(publicacion => publicacion.__typename === "Publicaciones")
    const foto = imageOrNull(investigador[0].foto?.url)

    const RICHTEXT_OPTIONS = {
      renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (<p>{children}</p>)
      }
      }
    }

return (<main className={styles.mainWrapper}>
      <CustomBreadcrumbs/>
      <div className="container">
      <section className={styles.infoGrid}>
        <aside className={styles.infoWrapper}>
          <div className={styles.foto}>
            {foto
              ? <Image src={foto} layout='fill' objectFit='cover' alt=''/>
              : <span aria-hidden="true">{investigador[0].nombre?.charAt(0)}</span>}
          </div>
          <h1 className={styles.nombre}>{investigador[0].nombre}</h1>
          {investigador[0].organizacion && <><Header4>Organización</Header4><p>{investigador[0].organizacion}</p></>}
          {investigador[0].rol && <><Header4>Especialidad</Header4><p>{investigador[0].rol}</p></>}
          {investigador[0].correo && <><Header4>Contacto</Header4><p><a className={styles.correo} href={`mailto:${investigador[0].correo}`}>{investigador[0].correo}</a></p></>}
        </aside>
        <div className={styles.infoDesarrollo}>
          {documentToReactComponents(investigador[0].descripcion?.json, RICHTEXT_OPTIONS)}
        </div>
      </section>

      {publicacionesRecientes.length > 0 && (
        <section>
          <Header3>Publicaciones</Header3>
          <div className={styles.publicaciones}>
              {publicacionesRecientes.map((publicacion) => ( <Publicacion key={publicacion.sys.id} date={publicacion.sys.publishedAt} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</Publicacion>)
              )}
          </div>
        </section>
      )}
      </div>

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
