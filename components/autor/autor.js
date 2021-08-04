import styles from './autor.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Autor = ({nombre, url, foto}) => {
    
    return (
        <div className={styles.autorWrapper}>
            <Image src={foto.url} width={50} height={50}/>
            <Link href={url}>
                <a className={styles.nombre}>
                {nombre}
                </a>
            </Link>
        </div>
    )
}

export default Autor