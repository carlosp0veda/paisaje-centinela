import Link from 'next/link'
import styles from './404.module.css'

export default function ServerErrorPage() {
  return <main className={styles.errorPageWrapper}>  
        <div className={styles.body}>
        <h1>505 - Hubo un error con el servidor</h1>
        <p><span className={styles.emoji}>&#128680; </span ><span className={styles.emoji}>&#128679; </span ><span className={styles.emoji}>&#128680; </span ></p>
        <Link href="/">
          <a className={styles.link}>
            Ir a Inicio
          </a>
        </Link>
        </div>
  </main>

}