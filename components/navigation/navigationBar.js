import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './navigationBar.module.css'
import {NAV_LINKS, isActive} from './navLinks'

const NavigationBar = () => {
    const {pathname} = useRouter()
    return (
        <nav className={styles.navigation} aria-label="Principal">
            <ul className={styles.navigationList}>
                {NAV_LINKS.map(link => {
                    const active = isActive(pathname, link.href)
                    return (
                        <li key={link.href}>
                            <Link href={link.href} className={[styles.navigationLink, active ? styles.active : ''].join(' ')} aria-current={active ? 'page' : undefined}>{link.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavigationBar
