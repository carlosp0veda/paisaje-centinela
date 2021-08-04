import Link from 'next/link'
import Navigation from '../navigation/navigation'
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    return (
        <header className={styles.header}>
        <Link href="/">
        <a>
            <div className={styles.logoWrapper}>
                <h2>Paisaje Centinela</h2>
                <p className={styles.nicaraguahonduras}>Nicaragua-Honduras</p>
            </div>
        </a>
        </Link>
            <Navigation/>
            <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} size='2x'/>
        </header>
    )
}