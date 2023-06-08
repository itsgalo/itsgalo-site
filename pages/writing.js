import { getContent } from '../utils/localdata';
import ArtworkCard from '../components/ArtworkCard';
import styles from '../styles/Page.module.css';

export default function Writing({content}) {
  return (
    <div className='container'>
      <div className='header'>
        <h1>{'$##-- selected writing --##$'}</h1>
      </div>
      <div className={styles.list}>
          {content.map((item, index) => (
          <ArtworkCard artwork={item} key={index}/>))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const content = await getContent("writings")
  return {
      props: {
        content
      }
  }
}