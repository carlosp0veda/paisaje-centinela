import {getInvestigadores} from '../../utils/contentful'
import styles from './investigadores.module.css'
import CustomBreadcrumbs from '../../components/breadcrumbs/CustomBreadcrumbs'
import Header3 from '../../components/UI/header3/header3'
import Image from 'next/image'
import Link from 'next/link'


export default function Investigadores({investigadores}) {
    const staff = investigadores.filter(investigador => {
      if (investigador.staffPrimario) {
        return investigador
      }
    })
    return (
        <main>
        <CustomBreadcrumbs/>
        <Header3>Colaboradores</Header3>
        <div className={styles.investigadoresGrid}>
        {staff.map(investigador => (
          <div key={investigador.sys.id} className={styles.investigadorCard}>
            <div className={styles.fotoWrapper}>
              <Image src={investigador.foto?.url} layout='fill' />
            </div>
            <Link href={`/investigadores/${investigador.slug}`}>
            <a>{investigador.nombre}</a>
            </Link>
            <p>{investigador.organizacion}</p>
            <p>{investigador.rol}</p>
          </div>
        ))}
        </div>
        </main>
    )
}


export const getStaticProps = async () => {

  

  const data = await getInvestigadores()


    return{
      props: {investigadores: data.autorCollection.items}
    }
}