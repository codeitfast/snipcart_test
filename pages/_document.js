import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://app.snipcart.com" />
      <link rel="preconnect" href="https://cdn.snipcart.com" />
      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
