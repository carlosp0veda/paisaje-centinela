import {getInvestigadores} from '../../utils/contentful'
import styles from './investigadores.module.css'
import CustomBreadcrumbs from '../../components/breadcrumbs/CustomBreadcrumbs'
import PageHeader from '../../components/pageHeader/pageHeader'
import Image from 'next/image'
import Link from 'next/link'
import {imageOrNull} from '../../utils/image'


export default function Investigadores({investigadores}) {
    const staff = investigadores.filter(investigador => investigador.staffPrimario)
    return (
        <main>
        <CustomBreadcrumbs/>
        <PageHeader eyebrow="equipo" titulo="Colaboradores" count={staff.length} descripcion="Personas e instituciones que investigan y trabajan en el Paisaje Centinela Nicaragua-Honduras."/>
        <section className="container page-body">
          <div className={styles.investigadoresGrid}>
          {staff.map(investigador => {
            const foto = imageOrNull(investigador.foto?.url)
            return (
              <article key={investigador.sys.id} className={styles.investigadorCard}>
                <div className={styles.fotoWrapper}>
                  {foto
                    ? <Image src={foto} layout='fill' objectFit='cover' alt=''/>
                    : <span aria-hidden="true">{investigador.nombre?.charAt(0)}</span>}
                </div>
                <Link href={`/investigadores/${investigador.slug}`}>
                  <a className={styles.nombre}>{investigador.nombre}</a>
                </Link>
                {investigador.organizacion && <p className={styles.organizacion}>{investigador.organizacion}</p>}
                {investigador.rol && <p className={styles.rol}>{investigador.rol}</p>}
              </article>
            )
          })}
          </div>
        </section>
        </main>
    )
}


export const getStaticProps = async () => {



  const data = await getInvestigadores()


    return{
      props: {investigadores: data.autorCollection.items}
    }
}
