import styles from './hero.module.css'
import Image from 'next/image'


const Hero = (props) => {
    return ( 
        <div className={styles.CardStyle}>  
            <div className={styles.HeroWrapper}>
                <Image className={styles.HeroImage} src={props.fotoURL ?? "https://i.stack.imgur.com/y9DpT.jpg"}  layout='fill' objectFit='cover'/>
                <div className={styles.Copy}>
                    <h2 className={styles.titulo}>{props.children}</h2>
                    {props.date ? <p className={styles.date}>{props.date.slice(0,10)}</p> : null}
                </div>
            
                
            </div>   
        </div>
    )
}

export default Hero
