import styles from './presentacion.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboard } from '@fortawesome/free-solid-svg-icons'
import {imageOrNull} from '../../utils/image'

const Presentacion = (props) => {
    const thumbnail = imageOrNull(props.pdfThumbnail)
    return (
        <article className={styles.presentacion}>
            <div className={styles.imageWrapper}>
                {thumbnail
                    ? <Image src={thumbnail} fill sizes='136px' style={{objectFit: 'cover'}} alt=''/>
                    : <FontAwesomeIcon icon={faChalkboard} className={styles.placeholderIcon}/>}
            </div>
            <div className={styles.info}>
                <p className={styles.date}>{props.date?.slice(0,4)}</p>
                <Link href={props.url} className={styles.titulo}>{props.titulo}</Link>
            </div>
        </article>
    )
}

export default Presentacion
