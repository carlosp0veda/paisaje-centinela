import Image from 'next/image'
import styles from './pdf.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons'
import {imageOrNull} from '../../utils/image'

const Pdf = (props) => {
    const thumbnail = imageOrNull(props.pdfThumbnail)
    return (
        <div className={styles.pdfWrapper}>
            <div className={styles.imageWrapper}>
                {thumbnail
                    ? <Image src={thumbnail} fill sizes='(max-width: 768px) 100vw, 260px' style={{objectFit: 'cover'}} alt={props.titulo}/>
                    : <FontAwesomeIcon icon={faFilePdf} className={styles.placeholderIcon}/>}
            </div>
            {props.date && <p className={styles.year}><span>Año</span>{props.date.slice(0,4)}</p>}
            {props.pdfUrl && (
                <a href={props.pdfUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <FontAwesomeIcon icon={faDownload} className={styles.icon}/> Descargar PDF
                </a>
            )}
        </div>
    )
}

export default Pdf
