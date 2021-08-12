import styles from './presentacion.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Presentacion = (props) => {
    return (
        <article className={styles.presentacion}>  
            <Image src={props.pdfThumbnail ?? "https://i.stack.imgur.com/y9DpT.jpg"} width={144} height={96} alt={props.titulo}/>
            <div className={styles.info}>
            <p className={styles.date}>{props.date?.slice(0,4)}</p>
            <Link href={props.url}>
        <a>
            <h2 className={styles.titulo}>{props.titulo}</h2>
         </a>
        </Link>
            </div>
        </article>
       
    )
}

export default Presentacion
