import '../styles/globals.css'
import Layout from '../hoc/layout'
import Seo from '../components/seo/seo'

function MyApp({ Component, pageProps}) {
  return (
    <>
      <Seo/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </>
  )
  
}


export default MyApp
