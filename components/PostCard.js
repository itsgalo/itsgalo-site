import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/PostCard.module.css';

function PostCard({ id, title, content, date, category, url }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={`${styles['accordion-menu__item']} ${isOpen ? styles['accordion-menu__item--active'] : styles['accordion-menu__item--inactive']}`}
        onClick={() => setIsOpen(!isOpen)}>
        <div id={id} className={styles['accordion-menu__header']}>
          <h1>{title}</h1>
          <div className={styles.details}>
            <h2>{date}</h2>
            <h2>{category}</h2>
          </div>
        </div>
        <div className={`${styles['accordion-menu__content']} ${isOpen ? styles['accordion-menu__content--active'] : ''}`}>
          {content}
          <br></br>
          <br></br>
          <Link href={url} target="_blank" >read more...</Link>
        </div>
      </div>
  );
}

export default PostCard;