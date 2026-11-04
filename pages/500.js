import Link from 'next/link'
import styles from './404.module.css'
import Seo from '../components/seo/seo'

export default function ServerErrorPage() {
  return <main className={styles.errorPageWrapper}>
        <Seo titulo="Error del servidor"/>
        <div className={`container ${styles.body}`}>
        <p className={styles.code}>500</p>
        <h1>Hubo un error con el servidor</h1>
        <p className={styles.text}>Intenta de nuevo en unos minutos.</p>
        <Link href="/" className={styles.link}>
          Ir a Inicio
        </Link>
        </div>
  </main>

}
