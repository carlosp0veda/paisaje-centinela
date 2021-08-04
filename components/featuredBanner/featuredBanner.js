import styles from './featuredBanner.module.css'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedBanner = ({featuredPosts}) => {
    return (
        <section className={styles.bannerWrapper}>
            <div className={styles.bannerGrid}>
                <article className={styles.postFirst} style={{backgroundImage:`url(${featuredPosts[0].imagen?.url})`}}>  
                    <Link className={styles.link} key={featuredPosts[0].titulo} href={`/articulos/${featuredPosts[0].slug}`}>
                            <a>
                                <h2 className={styles.titulo}>{featuredPosts[0].titulo}</h2>
                            </a>
                    </Link>                
                </article>

                <article className={styles.postSecond} style={{backgroundImage:`url(${featuredPosts[1].imagen?.url})`}}>  
                    <Link className={styles.link} key={featuredPosts[1].titulo} href={`/articulos/${featuredPosts[1].slug}`}>
                        <a>
                            <h2 className={styles.titulo}>{featuredPosts[1].titulo}</h2>
                        </a>
                    </Link>
                </article>

                <article className={styles.postThird} style={{backgroundImage:`url(${featuredPosts[2].imagen?.url})`}}>  
                    {/* <div className={styles.ImageWrapper}>
                        <Image className={styles.image} src={featuredPosts[2].imagen?.url ?? "https://i.stack.imgur.com/y9DpT.jpg"} layout='fill' priority alt={featuredPosts[2].titulo}/>            
                    </div> */}
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