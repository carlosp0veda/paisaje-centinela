import Link from 'next/link'
import styles from './404.module.css'
import Seo from '../components/seo/seo'

export default function ErrorPage() {
  return <main className={styles.errorPageWrapper}>
        <Seo titulo="Página no encontrada"/>
        <div className={`container ${styles.body}`}>
        <p className={styles.code}>404</p>
        <h1>No encontramos esta página</h1>
        <p className={styles.text}>Puede que el enlace haya cambiado o que el contenido ya no esté disponible.</p>
        <Link href="/" className={styles.link}>
          Ir a Inicio
        </Link>
        </div>
  </main>

}
