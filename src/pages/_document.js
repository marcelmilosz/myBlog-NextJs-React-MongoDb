import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head >
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        <link rel="icon" type="image/png" href="/public/image/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="notifications">

        </div>
      </body>
    </Html>
  )
}
