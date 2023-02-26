import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head >
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        <meta name="description" content="Free Full Stack tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, NextJs" />
        <meta name="author" content="Marcel Miłosz, marcel.milosz99@gmail.com" />
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
