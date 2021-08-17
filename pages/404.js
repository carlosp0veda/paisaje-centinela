import Link from 'next/link'
import styles from './404.module.css'

export default function ErrorPage() {
  return <main className={styles.errorPageWrapper}>  
        <div className={styles.body}>
        <h1>404 - Hubo un error</h1>
        <p><span className={styles.emoji}>&#128680; </span ><span className={styles.emoji}>&#128679; </span ><span className={styles.emoji}>&#128680; </span ></p>
        <Link href="/">
          <a className={styles.link}>
            Ir a Inicio
          </a>
        </Link>
        </div>
  </main>

}