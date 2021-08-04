import styles from './publicacion.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Publicacion = (props) => {
    return (
        <Link href={props.url}>
        <a>
        <article className={styles.publicacion}>  
            <Image src={props.pdfThumbnail ?? "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"} width={100} height={props.height ?? 150} alt={props.titulo}/>
            <div className={styles.info}>
            <p className={styles.date}>{props.date?.slice(0,4)}</p>
            <h2 className={styles.titulo}>{props.titulo}</h2>
            </div>
        </article>
        </a>
        </Link>
    )
}

export default Publicacion
