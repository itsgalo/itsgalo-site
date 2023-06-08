import PostCard from './PostCard';
import styles from '../styles/PostCard.module.css';

function Menu({posts}) {
  return (
    <div className={styles['accordion-menu']}>
      {posts.map((post, index)=> <PostCard 
        key={index}
        id = {posts[index].id}
        content={posts[index].description} 
        title={posts[index].name}
        date={posts[index].date}
        category={posts[index].category}
        url ={posts[index].url}
      /> )}
    </div>
  );
}

export default Menu;