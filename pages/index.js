import dynamic from 'next/dynamic'
import {getPublicaciones, getArticulos, getPaisajeCentinela, getPresentaciones} from '../utils/contentful'
import {motion} from 'framer-motion'
import Link from 'next/link'
import FeaturedBanner from '../components/featuredBanner/featuredBanner'
import styles from '../styles/index.module.css'
import Header3 from '../components/UI/header3/header3'

const DynamicCard = dynamic(() => import('../components/card/card'))
const DynamicPublicacion = dynamic(() => import('../components/publicacion/publicacion'))
const DynamicPresentacion = dynamic(() => import('../components/presentacion/presentacion'))

export default function Inicio({publicaciones, articulos, presentaciones, paisajeCentinela}) {

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
          <div className={styles.leftGrid}>
            <Header3>Artículos<Link href='/articulos'><span>Ver todas...</span></Link></Header3>
            <div className={styles.cards}>
            {articulos.map((articulo) => ( <DynamicCard key={articulo.sys.id} date={articulo.sys.firstPublishedAt} fotoURL={articulo.imagen?.url} width={articulo.imagen?.width} height={articulo.imagen?.height} url={`/articulos/${encodeURIComponent(articulo.slug)}`} >{articulo.titulo}</DynamicCard>)
            )}
            </div>
            <Header3>Bases de datos<Link href='/bd'><span>Ver todas...</span></Link></Header3>
          </div>
          <div className={styles.rightGrid}>
            <Header3>Publicaciones<Link href='/recursos/publicaciones'><span>Ver todas...</span></Link></Header3>
            <div>
            {publicaciones.map((publicacion) => ( <DynamicPublicacion key={publicacion.sys.id} date={publicacion.aoDePublicacin?.slice(0,4)} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</DynamicPublicacion>)
            )}
            </div>
            <Header3>Presentaciones<Link href='/recursos/presentaciones'><span>Ver todas...</span></Link></Header3>
            <div>
            {presentaciones.map((presentacion) => ( <DynamicPresentacion key={presentacion.sys.id} date={presentacion.sys.firstPublishedAt.slice(0,4)} titulo={presentacion.tituloDePresentacion} pdfThumbnail={presentacion.capturaPortada?.url} url={`/recursos/presentaciones/${encodeURIComponent(presentacion.slug)}`} >{presentacion.tituloDePresentacion}</DynamicPresentacion>)
            )}
            </div>
          </div>
        </section>
      </main>
  )
}


export const getStaticProps = async () => {

  

  const dataPubliciones = await getPublicaciones()
  const dataPresentaciones = await getPresentaciones()
  const dataArticulos = await getArticulos()
  const dataPaisajeCentinela = await getPaisajeCentinela()


    return{
      props: {
      publicaciones: dataPubliciones.publicacionesCollection.items.slice(0,10),
      presentaciones: dataPresentaciones.presentacionesCollection.items.slice(0,10),
      articulos: dataArticulos.articuloCollection.items.slice(0,10), 
      paisajeCentinela: dataPaisajeCentinela.paisajeCentinelaCollection.items
      },
      revalidate: 900  
    }
}
