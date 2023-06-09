import { getPosts } from '../utils/localdata';
import { useEffect } from 'react';
import Menu from '../components/Menu';


export default function Home({posts}) {

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem('key')
  }, [])

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