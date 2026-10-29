import styles from './featuredBanner.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {imageOrNull} from '../../utils/image'

const POSITIONS = [styles.postFirst, styles.postSecond, styles.postThird]

const FeaturedBanner = ({featuredPosts}) => {
    return (
        <section className={styles.bannerWrapper} aria-label="Artículos destacados">
            <div className={`container ${styles.bannerGrid}`}>
                {featuredPosts.slice(0, 3).map((post, i) => {
                    const foto = imageOrNull(post.imagen?.url)
                    return (
                        <article key={post.slug} className={[styles.post, POSITIONS[i]].join(' ')}>
                            <div className={styles.imageWrapper}>
                                {foto && <Image src={foto} priority layout='fill' objectFit="cover" alt=''/>}
                            </div>
                            <div className={styles.copy}>
                                {i === 0 && <p className={styles.eyebrow}>Destacado</p>}
                                <Link href={`/articulos/${post.slug}`}>
                                    <a className={styles.link}>
                                        <h2 className={styles.titulo}>{post.titulo}</h2>
                                    </a>
                                </Link>
                                {post.sys?.firstPublishedAt && <time className={styles.date} dateTime={post.sys.firstPublishedAt}>{post.sys.firstPublishedAt.slice(0,10)}</time>}
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default FeaturedBanner
