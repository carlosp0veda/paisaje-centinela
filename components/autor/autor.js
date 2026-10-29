import styles from './autor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {imageOrNull} from '../../utils/image'

const Autor = ({nombre, url, foto}) => {
    const src = imageOrNull(foto?.url)
    return (
        <div className={styles.autorWrapper}>
            <div className={styles.avatar}>
                {src
                    ? <Image src={src} fill sizes='44px' style={{objectFit: 'cover'}} alt=''/>
                    : <span aria-hidden="true">{nombre?.charAt(0)}</span>}
            </div>
            <Link href={url} className={styles.nombre}>{nombre}</Link>
        </div>
    )
}

export default Autor
