import styles from './hero.module.css'
import Image from 'next/image'
import {imageOrNull} from '../../utils/image'


const Hero = (props) => {
    const foto = imageOrNull(props.fotoURL)
    return (
        <section className={styles.HeroWrapper}>
            {foto && <Image className={styles.HeroImage} src={foto} layout='fill' objectFit='cover' priority alt=''/>}
            <div className={styles.overlay} aria-hidden="true"></div>
            <div className={['container', styles.Copy, props.narrow ? styles.narrow : '', props.overlap ? styles.overlap : ''].join(' ')}>
                {props.eyebrow && <p className={styles.eyebrow}>{props.eyebrow}</p>}
                <h1 className={styles.titulo}>{props.children}</h1>
                {(props.date || props.meta) && (
                    <p className={styles.date}>
                        {props.date && <time dateTime={props.date}>{props.date.slice(0,10)}</time>}
                        {props.date && props.meta && <span aria-hidden="true"> · </span>}
                        {props.meta}
                    </p>
                )}
            </div>
        </section>
    )
}

export default Hero
