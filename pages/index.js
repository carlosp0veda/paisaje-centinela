import {getPublicaciones, getArticulos, getPaisajeCentinela} from '../utils/contentful'
import {motion} from 'framer-motion'
import Link from 'next/link'
import FeaturedBanner from '../components/featuredBanner/featuredBanner'
import styles from '../styles/index.module.css'
import Card from '../components/card/card'
import Header3 from '../components/UI/header3/header3'
import Publicacion from '../components/publicacion/publicacion'

export default function Inicio({publicaciones, articulos, paisajeCentinela}) {

  return (
      <main className={styles.main}>
        <FeaturedBanner featuredPosts={articulos.slice(0,3)}/>
        <section className={styles.descripcion}>
          <h2>{paisajeCentinela[0].tipoDeContenido}</h2>
          <div>
            <p>{paisajeCentinela[0].excerp}</p>
            <Link href='/acerca'>
              <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className={styles.ctaLink} >
                Leer más...
              </motion.button>
            </Link>
          </div>
        </section>

        <section className={styles.recrusosGrid}>
          <div className={styles.cardsGrid}>
            <Header3>Artículos<Link href='/articulos'><span>Ver todas...</span></Link></Header3>
            <div className={styles.cards}>
            {articulos.slice(0,10).map((articulo) => ( <Card key={articulo.sys.id} date={articulo.sys.firstPublishedAt} fotoURL={articulo.imagen?.url} width={articulo.imagen?.width} height={articulo.imagen?.height} url={`/articulos/${encodeURIComponent(articulo.slug)}`} >{articulo.titulo}</Card>)
            )}
            </div>
          </div>
          <div className={styles.publicacionesGrid}>
            <Header3>Publicaciones<Link href='/recursos/publicaciones'><span>Ver todas...</span></Link></Header3>
            <div className={styles.publicaciones}>
            {publicaciones.slice(0,10).map((publicacion) => ( <Publicacion key={publicacion.sys.id} date={publicacion.aoDePublicacin?.slice(0,4)} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</Publicacion>)
            )}
            </div>
          </div>
        </section>
      </main>
  )
}


export const getStaticProps = async () => {

  

  const dataPubliciones = await getPublicaciones()
  const dataArticulos = await getArticulos()
  const dataPaisajeCentinela = await getPaisajeCentinela()


    return{
      props: {
      publicaciones: dataPubliciones.publicacionesCollection.items,
      articulos: dataArticulos.articuloCollection.items, 
      paisajeCentinela: dataPaisajeCentinela.paisajeCentinelaCollection.items
      },
      revalidate: 900  
    }
}
