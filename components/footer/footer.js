import Script from 'next/script'
import Link from 'next/link'
import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCreativeCommons} from '@fortawesome/free-brands-svg-icons'
import {NAV_LINKS} from '../navigation/navLinks'

const RECURSOS = [
    { href: '/recursos/publicaciones', label: 'Publicaciones' },
    { href: '/recursos/presentaciones', label: 'Presentaciones' },
    { href: '/recursos/bases-de-datos', label: 'Bases de datos' },
]

const footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <>
        <footer className={styles.footerContainer}>
        <div className={`container ${styles.upperGrid}`}>
            <div className={styles.brand}>
                <Link href='/'>
                    <a>
                        <span className={styles.wordmark}>Paisaje Centinela</span>
                        <span className={styles.nicaraguahonduras}>nicaragua-honduras</span>
                    </a>
                </Link>
                <div id="wcb" className="carbonbadge wcb-d"></div>
            </div>
            <nav className={styles.navigation} aria-label="Sitio">
                <h3>Sitio</h3>
                <ul className={styles.navigationList}>
                    {NAV_LINKS.map(link => <li key={link.href}><Link href={link.href}><a>{link.label}</a></Link></li>)}
                </ul>
            </nav>
            <nav className={styles.navigation} aria-label="Recursos">
                <h3>Recursos</h3>
                <ul className={styles.navigationList}>
                    {RECURSOS.map(link => <li key={link.href}><Link href={link.href}><a>{link.label}</a></Link></li>)}
                </ul>
            </nav>
        </div>

        <div className={`container ${styles.lowerGrid}`}>
            <p>&copy; {year} Paisaje Centinela Nicaragua-Honduras</p>
            <a className={styles.license} href='https://creativecommons.org/licenses/by/4.0/' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCreativeCommons} size='lg'/> CC BY 4.0
            </a>
        </div>
        </footer>
        <Script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer/>
        </>

    )
}

export default footer
