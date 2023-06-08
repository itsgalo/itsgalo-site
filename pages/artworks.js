import { getContent } from '../utils/localdata';
import ArtworkCard from '../components/ArtworkCard';
import styles from '../styles/Page.module.css';

export default function Artworks({content}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{'{{:: selected artworks ::}}'}</h1>
      </div>
      <div className={styles.list}>
          {content.map((item, index) => (
          <ArtworkCard artwork={item} key={index}/>))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const content = await getContent("artworks")
  return {
      props: {
        content
      }
  }
}