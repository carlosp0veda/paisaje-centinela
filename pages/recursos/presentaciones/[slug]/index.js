import { getPresentacion, getPresentaciones } from "../../../../utils/contentful";
import styles from './presentacion.module.css'
import CustomBreadcrumbs from '../../../../components/breadcrumbs/CustomBreadcrumbs'


function PresentacionPage({presentacion}) {

    return (
      <main className={styles.mainWrapper}>
            <CustomBreadcrumbs  />
            <iframe src={`${presentacion[0].presentacion?.url}#view=fitH&toolbar=1`} scrolling='no' type="application/pdf" width="100%" height='600px' className={styles.iframe} />
      </main>)

}


export async function getStaticPaths() {

    const data = await getPresentaciones()
    

  return {
    paths: data.presentacionesCollection.items.map(item => ({params:{slug:item.slug}}))
    ,
    fallback: 'blocking'
  };
}

export const getStaticProps = async (context) => {


  const data = await getPresentacion(context.params.slug)


    return{
      props: {presentacion: data.presentacionesCollection.items},
      revalidate: 300
    }
}

export default PresentacionPage