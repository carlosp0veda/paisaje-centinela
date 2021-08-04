import Image from 'next/image'
import Link from 'next/link'
import styles from './pdf.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

const Pdf = (props) => {
    return (
        <div className={styles.pdfWrapper}>  
            <Image src={props.pdfThumbnail ?? "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"} width={150} height={200} alt={props.titulo}/>
            <div className={styles.pdfLink}>
            <FontAwesomeIcon className={styles.icon} icon={faFilePdf} />
            <Link href={props.pdfUrl}><a target="_blank" className={styles.link}>Descargar PDF</a></Link>
            </div>
        </div>
    )
}

export default Pdf