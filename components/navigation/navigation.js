import Link from 'next/link'
import styles from './navigation.module.css'

const navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                <li className={styles.navigationLink}><Link href='/acerca'><a>Paisaje Centinela</a></Link></li>
                <li className={styles.navigationLink}><Link href='/articulos'><a>Artículos</a></Link></li>
                <li className={styles.navigationLink}><Link href='/recursos/publicaciones'><a>Recursos</a></Link></li>
                <li className={styles.navigationLink}><Link href='/investigadores'><a>Equipo</a></Link></li>
            </ul>
        </nav>
    )
}

export default navigation
