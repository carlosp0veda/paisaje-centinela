import dynamic from 'next/dynamic'
import {getPublicaciones, getArticulos, getPaisajeCentinela, getPresentaciones, getBasesDeDatos} from '../utils/contentful'
import Link from 'next/link'
import FeaturedBanner from '../components/featuredBanner/featuredBanner'
import styles from '../styles/index.module.css'
import Header3 from '../components/UI/header3/header3'
import BaseDeDatos from '../components/baseDeDatos/baseDeDatos'

const DynamicCard = dynamic(() => import('../components/card/card'))
const DynamicPublicacion = dynamic(() => import('../components/publicacion/publicacion'))
const DynamicPresentacion = dynamic(() => import('../components/presentacion/presentacion'))

export default function Inicio({publicaciones, articulos, presentaciones, paisajeCentinela, bds}) {

  return (
      <main className={styles.main}>
        <FeaturedBanner featuredPosts={articulos.slice(0,3)}/>
        <section className={styles.descripcion}>
          <div className={`container ${styles.descripcionInner}`}>
            <div>
              <p className={styles.eyebrow}>nicaragua · honduras</p>
              <h2>{paisajeCentinela[0].tipoDeContenido}</h2>
            </div>
            <div>
              <p className={styles.excerpt}>{paisajeCentinela[0].excerp}</p>
              <Link href='/acerca' className={styles.ctaLink}>
                Leer más
              </Link>
            </div>
          </div>
        </section>
        <section className={`container ${styles.recrusosGrid}`}>
          <div className={styles.leftGrid}>
            <Header3>Artículos<Link href='/articulos'>Ver todos</Link></Header3>
            <div className={styles.cards}>
            {articulos.slice(3, 9).map((articulo) => ( <DynamicCard key={articulo.sys.id} date={articulo.sys.firstPublishedAt} fotoURL={articulo.imagen?.url} url={`/articulos/${encodeURIComponent(articulo.slug)}`} >{articulo.titulo}</DynamicCard>)
            )}
            </div>
            <Header3>Bases de datos<Link href='/recursos/bases-de-datos'>Ver todas</Link></Header3>
            <div className={styles.files}>
            {bds.map(bd => (
              <BaseDeDatos key={bd.sys.id} nombre={bd.nombre} url={bd.archivoCollection.items[0]?.url}/>
              ))}
            </div>
          </div>
          <aside className={styles.rightGrid}>
            <Header3>Publicaciones<Link href='/recursos/publicaciones'>Ver todas</Link></Header3>
            <div className={styles.list}>
            {publicaciones.map((publicacion) => ( <DynamicPublicacion key={publicacion.sys.id} badge={publicacion.categoria} date={publicacion.aoDePublicacin?.slice(0,4)} titulo={publicacion.titulo} pdfThumbnail={publicacion.fotoPdf?.url} url={`/recursos/publicaciones/${encodeURIComponent(publicacion.slug)}`} >{publicacion.resumen}</DynamicPublicacion>)
            )}
            </div>
            <Header3>Presentaciones<Link href='/recursos/presentaciones'>Ver todas</Link></Header3>
            <div className={styles.list}>
            {presentaciones.map((presentacion) => ( <DynamicPresentacion key={presentacion.sys.id} date={presentacion.sys.firstPublishedAt.slice(0,4)} titulo={presentacion.tituloDePresentacion} pdfThumbnail={presentacion.capturaPortada?.url} url={`/recursos/presentaciones/${encodeURIComponent(presentacion.slug)}`} >{presentacion.tituloDePresentacion}</DynamicPresentacion>)
            )}
            </div>
          </aside>
        </section>
      </main>
  )
}


export const getStaticProps = async () => {



  const dataPubliciones = await getPublicaciones()
  const dataPresentaciones = await getPresentaciones()
  const dataArticulos = await getArticulos()
  const dataPaisajeCentinela = await getPaisajeCentinela()
  const dataBD = await getBasesDeDatos()


    return{
      props: {
      publicaciones: dataPubliciones.publicacionesCollection.items.slice(0,5),
      presentaciones: dataPresentaciones.presentacionesCollection.items.slice(0,4),
      articulos: dataArticulos.articuloCollection.items.slice(0,9),
      bds: dataBD.basesDeDatosCollection.items.slice(0,4),
      paisajeCentinela: dataPaisajeCentinela.paisajeCentinelaCollection.items
      },
      revalidate: 900
    }
}
