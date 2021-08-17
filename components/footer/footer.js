import Script from 'next/script'
import Link from 'next/link'
import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCreativeCommons} from '@fortawesome/free-brands-svg-icons'

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
            <p>&copy; {year} Paisaje Centinela Nicaragua-Honduras</p><p><Link href='https://creativecommons.org/licenses/by/4.0/'><a target='_blank'><FontAwesomeIcon icon={faCreativeCommons} size='2x'/></a></Link></p> 
        </div>
        </footer>
        <Script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer/>
        </>
        
    )
}

export default footer
