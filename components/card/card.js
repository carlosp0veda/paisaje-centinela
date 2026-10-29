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
                    ? <Image src={foto} layout='fill' objectFit='cover' alt=''/>
                    : <div className={styles.placeholder} aria-hidden="true"></div>}
            </div>
            <div className={styles.body}>
                {props.date ? <time className={styles.date} dateTime={props.date}>{props.date.slice(0,10)}</time> : null}
                <Link href={props.url}>
                    <a className={styles.titulo}>{props.children}</a>
                </Link>
            </div>
        </article>
    )
}

export default Card
