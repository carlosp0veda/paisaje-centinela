import Link from 'next/link'
import NavigationBar from '../navigation/navigationBar'
import Menutoggle from '../navigation/sidedrawer/MenuToggle/MenuToggle'
import Image from 'next/image'
import styles from './header.module.css'
import{motion} from 'framer-motion'


export default function Header(props) {
    return (
        <header className={styles.header}>
        <Link href="/">
        <a>
            <div  className={styles.logoWrapper}>
                <motion.div whileTap={{scale: 0.9}}>
                    <h2>Paisaje Centinela</h2>
                    <p className={styles.nicaraguahonduras}>nicaragua-honduras</p>
                </motion.div>
            </div>
        </a>
        </Link>
        <NavigationBar/>
        <Menutoggle clicked={props.clicked}/>
        <a className={styles.logo2} href='https://www.catie.ac.cr' target="_blank">
        <motion.div whileTap={{scale: 0.9}} className={styles.imageWrapper}>
        <Image src='/images/catie.png' width={2069} height={1097} />
        </motion.div>
        </a>
        </header>
    )
}