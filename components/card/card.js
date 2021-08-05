import styles from './card.module.css'
import LinkCTA from '../UI/CTA/LinkCTA'
import Image from 'next/image'
import Link from 'next/link'


const Card = (props) => {
    return (
        <article className={styles.CardStyle}>  
            <div className={styles.ImageWrapper}>
            <Image src={props.fotoURL ?? "https://i.stack.imgur.com/y9DpT.jpg"} layout='fill' alt={props.children}  placeholder="blur"/>
            </div>
            <p className={styles.date}>{props.date.slice(0,10)}</p>
              <Link href={props.url}>
        <a className={styles.titulo}>{props.children}</a>
        </Link>
        </article>
       
    )
}

export default Card
