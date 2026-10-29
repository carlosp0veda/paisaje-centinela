import Link from 'next/link'
import NavigationBar from '../navigation/navigationBar'
import Menutoggle from '../navigation/sidedrawer/MenuToggle/MenuToggle'
import Image from 'next/image'
import styles from './header.module.css'
import {motion} from 'framer-motion'


export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <Link href="/">
                    <a className={styles.brand} aria-label="Paisaje Centinela — Inicio">
                        <motion.div whileTap={{scale: 0.96}}>
                            <span className={styles.wordmark}>Paisaje Centinela</span>
                            <span className={styles.nicaraguahonduras}>nicaragua-honduras</span>
                        </motion.div>
                    </a>
                </Link>
                <NavigationBar/>
                <a className={styles.partner} href='https://www.catie.ac.cr' target="_blank" rel="noopener noreferrer" aria-label="CATIE">
                    <Image src='/images/catie.png' width={2069} height={1097} alt="CATIE" />
                </a>
                <Menutoggle clicked={props.clicked} open={props.open}/>
            </div>
        </header>
    )
}
