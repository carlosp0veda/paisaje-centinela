import styles from './header3.module.css'

// `action` (p. ej. un enlace "Ver todos") va junto al título, fuera del <h3>,
// para que el lector de pantalla anuncie solo el nombre de la sección.
const Header3 = ({children, action}) => {
    if (!action) {
        return <h3 className={styles.h3}>{children}</h3>
    }
    return (
        <div className={styles.h3}>
            <h3 className={styles.titulo}>{children}</h3>
            {action}
        </div>
    )
}

export default Header3
