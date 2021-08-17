import Link from 'next/link'
import styles from './recursos.module.css'
import {getBasesDeDatos, getPresentaciones, getPublicaciones} from '../../utils/contentful'
import CustomBreadcrumbs from '../../components/breadcrumbs/CustomBreadcrumbs'
import Header3 from '../../components/UI/header3/header3'
import Publicacion from '../../components/publicacion/publicacion'
import Presentacion from '../../components/presentacion/presentacion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'



const RecursosPage = ({publicaciones, presentaciones, bds}) => {

    return (
        <main>
        <CustomBreadcrumbs/>
         <div className={styles.recursosGrid}>
            <Header3>Publicaciones<Link href='/recursos/publicaciones'><span>Ver todas...</span></Link></Header3>
            <div className={styles.publicaciones}>{
            publicaciones.map((publicacion) => ( <Publicacion key={publicacion.sys.id} badge={publicacion.categoria} date={publicacion.aoDePublicacin} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</Publicacion>))
            }
            </div>
            <Header3>Presentaciones<Link href='/recursos/presentaciones'><span>Ver todas...</span></Link></Header3>
            <div className={styles.presentaciones}>{
            presentaciones.map((presentacion) => ( <Presentacion key={presentacion.sys.id} date={presentacion.sys.firstPublishedAt} titulo={presentacion.tituloDePresentacion} pdfThumbnail={presentacion.capturaPortada?.url} url={`/recursos/presentaciones/${encodeURIComponent(presentacion.slug)}`} >{presentacion.tituloDePresentacion}</Presentacion>))
            }
            </div>
            <Header3>Bases de datos<Link href='/recursos/bases-de-datos'><span>Ver todas...</span></Link></Header3>
            <div className={styles.files}>
            {bds.map(bd => (
              <article key={bd.sys.id} className={styles.file}>
                <div className={styles.fileInfo}>
                  <h4>{bd.nombre}</h4>
                  <FontAwesomeIcon icon={faFileExcel} size='4x' color="#1e3f74"/>
                  <Link href={bd.archivoCollection.items[0].url}><a className={styles.downloadLink}>Descargar Excel</a></Link>
                </div>
              </article>
              ))}
          </div>
        </div>
        </main>
    )
}

export const getStaticProps = async () => {

  const dataPublicaciones = await getPublicaciones();
  const dataPresentaciones = await getPresentaciones();
  const dataBD = await getBasesDeDatos()

    return{
      props: {
      publicaciones: dataPublicaciones.publicacionesCollection.items.slice(0,9),
      presentaciones: dataPresentaciones.presentacionesCollection.items.slice(0,9),
      bds: dataBD.basesDeDatosCollection.items.slice(0,6),
      },
      revalidate: 300      
    }
}

export default RecursosPage
