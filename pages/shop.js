import Eth from '../components/Eth'
import Tez from '../components/Tez'
import EthTokens from '../components/EthTokens'
import TezTokens from '../components/TezTokens';
import ProductList from '../components/ProductList'
import { getProducts } from '../utils/localdata';
import Image from 'next/image';
import styles from '../styles/Page.module.css'

export default function Shop({products}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>{'!*-- print shop --*!'}</h1>
        </div>
        <div className={styles.banner}>
          <Image
            src={'/prints/BANNER.jpg'}
            alt={'print banner'}
            fill
            className={styles['banner-image']}
            />
        </div>
        <p>digital prints are available for purchase here for both NFT editions and out-of-band print-only editions. all prints are archival giclée on heavyweight smooth matte 330gsm paper. see below for available works and sizes. images below are photographs of actual prints, for original media see the artworks page. artworks feature crisp, chunky, pixels that are upscaled to fit the paper with a 1/2" or 1" margin. all are printed on demand and signed by the artist. please allow 7-14 days for processing and shipping times will vary by location. prices include shipping.<br></br><br></br>collectors: if you hold any @itsgalo art blocks or fx(hash) tokens, please connect your wallet with the buttons above (secure connection, only reads your public wallet address) and your print-eligible tokens will appear below.</p>
      </div>
      <div className={styles.tokenHeader}>
        <Eth />
      </div>
        <EthTokens />
      <div className={styles.midHeader}>
        <Tez />
      </div>
        <TezTokens />
      <div className={styles.header}>
        <h1>out-of-band/print-only editions</h1>
      </div>
      <ProductList products={products}/>      
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return {
      props: {
          products
      }
  }
}