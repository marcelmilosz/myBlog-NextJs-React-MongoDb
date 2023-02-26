import '@/styles/globals.css'
import Layout from 'components/layout/layout'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/image/logo.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>

  )
}
