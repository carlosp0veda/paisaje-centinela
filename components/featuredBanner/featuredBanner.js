import styles from './featuredBanner.module.css'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedBanner = ({featuredPosts}) => {
    return (
        <section className={styles.bannerWrapper}>
            <div className={styles.bannerGrid}>
                <article className={styles.postFirst} > 
                <div className={styles.imageWrapper}>
                    <Image src={featuredPosts[0].imagen?.url} priority layout='fill' objectFit="cover" />
                </div> 
                    <Link className={styles.link} key={featuredPosts[0].titulo} href={`/articulos/${featuredPosts[0].slug}`}>
                            <a>
                                <h2 className={styles.titulo}>{featuredPosts[0].titulo}</h2>
                            </a>
                    </Link>                
                </article>

                <article className={styles.postSecond} > 
                <div className={styles.imageWrapper}>
                    <Image src={featuredPosts[1].imagen?.url} priority layout='fill' objectFit="cover"/>
                </div>  
                    <Link className={styles.link} key={featuredPosts[1].titulo} href={`/articulos/${featuredPosts[1].slug}`}>
                        <a>
                            <h2 className={styles.titulo}>{featuredPosts[1].titulo}</h2>
                        </a>
                    </Link>
                </article>

                <article className={styles.postThird}>  
                    <div className={styles.imageWrapper}>
                    <Image src={featuredPosts[2].imagen?.url} priority layout='fill' objectFit="cover"/>
                </div>  
                    <Link className={styles.link} key={featuredPosts[2].titulo} href={`/articulos/${featuredPosts[2].slug}`}>
                        <a>
                            <h2 className={styles.titulo}>{featuredPosts[2].titulo}</h2>
                        </a>
                    </Link>
                </article>
            </div>
        </section>
    )
}

export default FeaturedBanner