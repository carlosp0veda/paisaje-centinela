import Link from 'next/link'
import styles from './navigationBar.module.css'

const NavigationBar = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                <li className={styles.one}><Link href='/acerca'><a className={[styles.navigationLink, styles.oneLink].join(' ')}>Paisaje Centinela</a></Link></li>
                <li className={styles.two}><Link href='/articulos'><a className={styles.navigationLink}>Artículos</a></Link></li>
                <li className={styles.three}><Link href='/recursos/publicaciones'><a className={styles.navigationLink}>Recursos</a></Link></li>
                <li className={styles.four}><Link href='/investigadores'><a className={styles.navigationLink}>Equipo</a></Link></li>
                <hr className={styles.hr}/>
            </ul>
        </nav>
    )
}

export default NavigationBar
