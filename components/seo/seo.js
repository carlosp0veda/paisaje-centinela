import Head from 'next/head'
import {imageOrNull} from '../../utils/image'

const SITE = 'Paisaje Centinela'
const DESCRIPCION = 'Paisaje Centinela Nicaragua-Honduras'

// Título, descripción y vista previa para compartir. Las claves `key` permiten
// que el <Seo/> de cada página reemplace al valor por defecto de _app.
const Seo = ({titulo, descripcion, imagen}) => {
    const title = titulo ? `${titulo} · ${SITE}` : `${SITE} Nicaragua-Honduras`
    descripcion = descripcion || DESCRIPCION
    const foto = imageOrNull(imagen)
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={descripcion} key="description"/>
            <meta property="og:site_name" content={SITE} key="og:site_name"/>
            <meta property="og:title" content={titulo || SITE} key="og:title"/>
            <meta property="og:description" content={descripcion} key="og:description"/>
            <meta property="og:type" content="website" key="og:type"/>
            {foto && <meta property="og:image" content={`${foto}?w=1200&h=630&fit=fill`} key="og:image"/>}
            <meta name="twitter:card" content={foto ? 'summary_large_image' : 'summary'} key="twitter:card"/>
        </Head>
    )
}

export default Seo
