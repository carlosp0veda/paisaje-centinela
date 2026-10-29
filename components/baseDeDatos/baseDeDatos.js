import styles from './baseDeDatos.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel, faDownload } from '@fortawesome/free-solid-svg-icons'

const BaseDeDatos = ({nombre, descripcion, url}) => {
    return (
        <article className={styles.file}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={faFileExcel}/>
            </div>
            <div className={styles.fileInfo}>
                <h4>{nombre}</h4>
                {descripcion && <p>{descripcion}</p>}
                {url && (
                    <a href={url} className={styles.downloadLink}>
                        <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon}/> Descargar Excel
                    </a>
                )}
            </div>
        </article>
    )
}

export default BaseDeDatos
