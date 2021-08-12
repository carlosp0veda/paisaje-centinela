import Script from 'next/script'
import styles from './footer.module.css'

const footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className={styles.footerContainer}>

        <div id="wcb" className="carbonbadge"></div>
        <Script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer/>

            &copy; {year} Paisaje Centinela
        </footer>
    )
}

export default footer
