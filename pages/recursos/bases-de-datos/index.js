import { getBasesDeDatos } from "../../../utils/contentful";
import Link from 'next/link'
import Header3 from '../../../components/UI/header3/header3'
import styles from './bd.module.css'
import CustomBreadcrumbs from '../../../components/breadcrumbs/CustomBreadcrumbs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'

const BasesDeDatosPage = ({bds}) => {
    return (
      <main className={styles.mainWrapper}>
        <CustomBreadcrumbs/>
        <section className={styles.contentWrapper}>
          <Header3>Bases de datos</Header3>
          <div className={styles.files}>
            {bds.map(bd => (
              <article key={bd.sys.id} className={styles.file}>
                <div className={styles.fileInfo}>
                  <h4>{bd.nombre}</h4>
                  <p>{bd.descripcion}</p>
                  <FontAwesomeIcon icon={faFileExcel} size='4x' color="#1e3f74"/>
                  <Link href={bd.archivoCollection.items[0].url}><a className={styles.downloadLink}>Descargar Excel</a></Link>
                </div>
              </article>
              ))}
          </div>
        </section>
      </main>
    )
}

export const getStaticProps = async () => {

  const data = await getBasesDeDatos();

    return{
      props: {
      bds: data.basesDeDatosCollection.items
      },
      revalidate: 900      
    }
}

export default BasesDeDatosPage