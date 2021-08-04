import styles from './articulos.module.css'
import {getArticulos} from '../../utils/contentful'
import CustomBreadcrumbs from '../../components/breadcrumbs/CustomBreadcrumbs'
import Header3 from '../../components/UI/header3/header3'
import Card from '../../components/card/card'


const ArticulosPage = ({articulos}) => {
    return (
        <main>
            <CustomBreadcrumbs/>
            <Header3>Artículos</Header3>
            <div className={styles.cards}>
                {articulos.map((articulo) => ( <Card key={articulo.sys.id} date={articulo.sys.firstPublishedAt} fotoURL={articulo.imagen?.url} width={articulo.imagen?.width} height={articulo.imagen?.height} url={`/articulos/${encodeURIComponent(articulo.slug)}`} >{articulo.titulo}</Card>)
                )}
            </div>
        </main>
    )
}

export const getStaticProps = async () => {

  const data = await getArticulos()


    return{
      props: {
      articulos: data.articuloCollection.items, 
      },
      revalidate: 900      
    }
}


export default ArticulosPage
