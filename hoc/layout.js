import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Head from 'next/head'

function layout({children}) {
    return (
        <>
        <Head>
            <title>Paisaje Centinela</title>
            <meta name="description" content="Paisaje Centinela" />
        </Head>
         <Header/>
         {children}
         <Footer/>

        </>
    )
}

export default layout
