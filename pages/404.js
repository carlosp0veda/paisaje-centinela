import Link from 'next/link'
import styles from './404.module.css'

export default function ErrorPage() {
  return <main className={styles.errorPageWrapper}>
        <div className={`container ${styles.body}`}>
        <p className={styles.code}>404</p>
        <h1>No encontramos esta página</h1>
        <p className={styles.text}>Puede que el enlace haya cambiado o que el contenido ya no esté disponible.</p>
        <Link href="/">
          <a className={styles.link}>
            Ir a Inicio
          </a>
        </Link>
        </div>
  </main>

}
