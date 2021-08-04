import styles from './card.module.css'
import LinkCTA from '../UI/CTA/LinkCTA'
import Image from 'next/image'
import Link from 'next/link'

const Card = (props) => {
    return (
        <Link href={props.url}>
        <a>
        <article className={styles.CardStyle}>  
            <div className={styles.ImageWrapper}>
            <Image src={props.fotoURL ?? "https://i.stack.imgur.com/y9DpT.jpg"} layout='fill' alt={props.children}/>
            </div>
            <p className={styles.date}>{props.date.slice(0,10)}</p>
            <h2 className={styles.titulo}>{props.children}</h2>
        </article>
        </a>
        </Link>
    )
}

export default Card
