import products from '../products/products.json';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

//todo: only import in _app.js, not in index.js
import Header from '../main_comps/header/header.jsx'
//import Card from '../main_comps/buy_merch/card.jsx'
import CardGroup from '../main_comps/buy_merch/cardGroup.jsx'
import SongBox from '../main_comps/song_requests/song-holder.jsx'
import Front from '../main_comps/welcome/front.jsx'
import Footer from '../main_comps/footer/footer.jsx'
import UseStateHolder from '../main_comps/song_requests/useStateHolder';
import PhoneFront from '../main_comps/welcome/phoneFront'

//<UseStateHolder />

export default function Home() {
  return (
    <>
      <Header items={[{name:'songs',href:'#songs'},{name:'shop',href:'#shop'}]}/>
      <PhoneFront />
      <Front />
      <SongBox genre="Pop." songs={[{'text':'SONG HERE'},{'text':'SONG HERE'},{'text':'SONG HERE'}]}/>
      <CardGroup products={products} />
      <Footer />
    </>
  )
}