import Link from 'next/link'
import styles from './404.module.css'

export default function ServerErrorPage() {
  return <main className={styles.errorPageWrapper}>
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
