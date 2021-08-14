import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    
    return (
      <Html>
        <Head>
          <meta name="description" content="Paisaje Centinela Nicaragua-Honduras" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Roboto&family=Georama&family=Cormorant+Garamond&family=Seymour+One&family=Major+Mono+Display&display=swap" rel="stylesheet"/>
          <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=6117600e030dfe00134038f2&product=sticky-share-buttons" async="async"></script>
        </Head>
        <body>
          <div class="sharethis-sticky-share-buttons"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument