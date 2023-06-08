import { getPosts } from '../utils/localdata';
import Menu from '../components/Menu';


export default function Home({posts}) {
  return (
    <div className="container">
      <div className='header'>
        <h1>{'<!--- news feed --!>'}</h1>
      </div>
      <Menu posts={posts}/>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()
  return {
      props: {
          posts
      }
  }
}