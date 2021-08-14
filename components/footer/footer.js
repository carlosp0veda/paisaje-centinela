import Script from 'next/script'
import Link from 'next/link'
import styles from './footer.module.css'

const footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <>
        <footer className={styles.footerContainer}>
        <div className={styles.upperGrid}>
            <div id="wcb" className="carbonbadge"></div>
            {/* <nav className={styles.navigation}>
                <h3>Recursos</h3>
                <ul className={styles.navigationList}>
                    <li ><Link href='/recursos/publicaciones'><a>Publicaciones</a></Link></li>
                    <li ><Link href='/recursos/presentaciones'><a>Presentaciones</a></Link></li>
                    <li ><Link href='/recursos/bases-de-datos'><a>Bases de datos</a></Link></li>
                </ul>
            </nav> */}
        </div>

        <div className={styles.lowerGrid}>
            <p>&copy; {year} Paisaje Centinela Nicaragua-Honduras</p><p>Desarrollado por <Link href='https://www.linkedin.com/in/carlos-poveda-649a26127/'><a className={styles.profileLink}>Carlos Poveda</a></Link></p> 
        </div>
        </footer>
        <Script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer/>
        </>
        
    )
}

export default footer
