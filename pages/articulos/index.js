import styles from './articulos.module.css'
import {getArticulos} from '../../utils/contentful'
import CustomBreadcrumbs from '../../components/breadcrumbs/CustomBreadcrumbs'
import PageHeader from '../../components/pageHeader/pageHeader'
import Card from '../../components/card/card'


const ArticulosPage = ({articulos}) => {
    return (
        <main>
            <CustomBreadcrumbs/>
            <PageHeader eyebrow="paisaje centinela" titulo="Artículos" count={articulos.length} descripcion="Notas y hallazgos de las investigaciones en el Paisaje Centinela Nicaragua-Honduras."/>
            <section className="container page-body">
                <div className={styles.cards}>
                    {articulos.map((articulo) => ( <Card key={articulo.sys.id} date={articulo.sys.firstPublishedAt} fotoURL={articulo.imagen?.url} url={`/articulos/${encodeURIComponent(articulo.slug)}`} >{articulo.titulo}</Card>)
                    )}
                </div>
            </section>
        </main>
    )
}

export const getStaticProps = async () => {

  const data = await getArticulos()


    return{
      props: {
      articulos: data.articuloCollection.items,
      },
      revalidate: 300
    }
}


export default ArticulosPage
