import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {imageOrNull} from '../../utils/image'


const Card = (props) => {
    const foto = imageOrNull(props.fotoURL)
    return (
        <article className={styles.CardStyle}>
            <div className={styles.ImageWrapper}>
                {foto
                    ? <Image src={foto} fill sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px' style={{objectFit: 'cover'}} alt=''/>
                    : <div className={styles.placeholder} aria-hidden="true"></div>}
            </div>
            <div className={styles.body}>
                {props.date ? <time className={styles.date} dateTime={props.date}>{props.date.slice(0,10)}</time> : null}
                <Link href={props.url} className={styles.titulo}>{props.children}</Link>
            </div>
        </article>
    )
}

export default Card
