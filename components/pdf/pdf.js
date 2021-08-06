import Image from 'next/image'
import Link from 'next/link'
import styles from './pdf.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Header4 from '../UI/header4/header4'

const Pdf = (props) => {
    return (
        <div className={styles.pdfWrapper}>  
            <div className={styles.imageWrapper}>
                <Image className={styles.image} src={props.pdfThumbnail ?? "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"} width={150} height={200} alt={props.titulo}/>
            </div>
            <p style={{paddingTop:'8px'}}><strong>Año: </strong>{props.date.slice(0,4)}</p>
            <div className={styles.pdfLink}>
            <FontAwesomeIcon className={styles.icon} icon={faFilePdf} />
            <Link href={props.pdfUrl}><a target="_blank" className={styles.link}>Descargar PDF</a></Link>
            </div>
        </div>
    )
}

export default Pdf