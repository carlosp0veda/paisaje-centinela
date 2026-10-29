import styles from './pageHeader.module.css'

// Encabezado editorial para páginas de índice: sección, título, descripción y conteo.
const PageHeader = ({eyebrow, titulo, descripcion, count, children}) => {
    return (
        <header className={styles.pageHeader}>
            <div className="container">
                {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
                <div className={styles.row}>
                    <h1 className={styles.titulo}>{titulo}</h1>
                    {typeof count === 'number' && <p className={styles.count}>{count} {count === 1 ? 'elemento' : 'elementos'}</p>}
                </div>
                {descripcion && <p className={styles.descripcion}>{descripcion}</p>}
                {children}
            </div>
        </header>
    )
}

export default PageHeader
