import styles from './footer.module.css'

const footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className={styles.footerContainer}>

            &copy; {year} Paisaje Centinela
        </footer>
    )
}

export default footer
