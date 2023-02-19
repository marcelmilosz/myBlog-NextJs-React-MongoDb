import '@/styles/globals.css'
import Layout from 'components/layout/layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        {/* Favicon here  */}
      </Head>
      <Component {...pageProps} />
    </Layout>

  )
}
