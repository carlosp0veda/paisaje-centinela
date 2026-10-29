import Link from 'next/link'
import NavigationBar from '../navigation/navigationBar'
import Menutoggle from '../navigation/sidedrawer/MenuToggle/MenuToggle'
import Image from 'next/image'
import styles from './header.module.css'


export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.brand} aria-label="Paisaje Centinela — Inicio">
                    <div className={styles.brandInner}>
                        <span className={styles.wordmark}>Paisaje Centinela</span>
                        <span className={styles.nicaraguahonduras}>nicaragua-honduras</span>
                    </div>
                </Link>
                <NavigationBar/>
                <a className={styles.partner} href='https://www.catie.ac.cr' target="_blank" rel="noopener noreferrer" aria-label="CATIE">
                    <Image src='/images/catie.png' width={2069} height={1097} sizes='120px' style={{width: '100%', height: 'auto'}} alt="CATIE" />
                </a>
                <Menutoggle clicked={props.clicked} open={props.open}/>
            </div>
        </header>
    )
}
