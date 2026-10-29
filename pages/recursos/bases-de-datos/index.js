import { getBasesDeDatos } from "../../../utils/contentful";
import PageHeader from '../../../components/pageHeader/pageHeader'
import styles from './bd.module.css'
import CustomBreadcrumbs from '../../../components/breadcrumbs/CustomBreadcrumbs'
import BaseDeDatos from '../../../components/baseDeDatos/baseDeDatos'

const BasesDeDatosPage = ({bds}) => {
    return (
      <main>
        <CustomBreadcrumbs/>
        <PageHeader eyebrow="recursos" titulo="Bases de datos" count={bds.length} descripcion="Conjuntos de datos en formato Excel, disponibles para descarga."/>
        <section className="container page-body">
          <div className={styles.files}>
            {bds.map(bd => (
              <BaseDeDatos key={bd.sys.id} nombre={bd.nombre} descripcion={bd.descripcion} url={bd.archivoCollection.items[0]?.url}/>
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
      revalidate: 300
    }
}

export default BasesDeDatosPage
