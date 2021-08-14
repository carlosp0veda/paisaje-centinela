import styles from './publicacion.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Publicacion = (props) => {
    return (
        <article className={styles.publicacion}>  
            <div className={styles.imageWrapper}>
                <Image src={props.pdfThumbnail ?? "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg"} width={100} height={props.height ?? 150} alt={props.titulo}/>
            </div>
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

export default Publicacion
