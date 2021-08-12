import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../hoc/layout'

function MyApp({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Paisaje Centinela</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </>
  )
  
}


export default MyApp
