import styles from './publicacion.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '../UI/badge/badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import {imageOrNull} from '../../utils/image'

const Publicacion = (props) => {
    const thumbnail = imageOrNull(props.pdfThumbnail)
    const badges = Array.isArray(props.badge) ? props.badge : props.badge ? [props.badge] : []
    return (
        <article className={styles.publicacion}>
            <div className={styles.imageWrapper}>
                {thumbnail
                    ? <Image src={thumbnail} layout='fill' objectFit='cover' alt=''/>
                    : <FontAwesomeIcon icon={faFilePdf} className={styles.placeholderIcon}/>}
            </div>
            <div className={styles.info}>
                <p className={styles.date}>{props.date?.slice(0,4)}</p>
                <Link href={props.url}>
                    <a className={styles.titulo}>{props.titulo}</a>
                </Link>
                {badges.length > 0 && <div className={styles.badges}>{badges.map(b => <Badge key={b}>{b}</Badge>)}</div>}
            </div>
        </article>
    )
}

export default Publicacion
