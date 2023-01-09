import {SnipcartProvider} from 'use-snipcart'
import '../styles/globals.css'
import '../public/output.css'

export default function App({ Component, pageProps }) {
  return <SnipcartProvider><Component {...pageProps} /></SnipcartProvider>
}
