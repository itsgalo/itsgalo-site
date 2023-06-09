import { getContent } from '../utils/localdata';
import Menu from '../components/Menu';
import styles from '../styles/Page.module.css';

export default function Teaching({content}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{'--@@++ teaching archive ++@@--'}</h1>
      </div>
      <Menu posts={content}/>   
    </div>
  )
}

export async function getStaticProps() {
  const content = await getContent("teachings")
  return {
      props: {
        content
      }
  }
}