import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Page.module.css';

const ArtworkCard = ({ artwork }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isModal, setModal] = useState(false);

  const handleImgClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  const handleModalClick = () => {
    setModal(!isModal);
    
  }

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={artwork.imageUrl}
        alt={artwork.description}
        loading="lazy"
        fill
        className={styles['centered-image']}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onClick={handleImgClick}
        />
        {isEnlarged && (
        <div className={`${styles.enlarged} ${styles.fadeIn}`} onClick={handleImgClick}>
          <img src={artwork.imageUrl} alt={artwork.description} style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}
        {isModal && (
        <div className={`${styles.modal} ${styles.fadeIn}`}>
          <h2 className={styles.close} onClick={handleModalClick}>×</h2>
            <p>
              {artwork.description}
            </p>
            <h2 className={styles.link}>
              <Link href={artwork.url} target="_blank">[more info]</Link>
            </h2>
        </div>
      )}
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{artwork.name}</h2>
        <h2 className={styles.category}>{artwork.category}</h2>
        <h2 className={styles.details} onClick={handleModalClick}>details</h2>
      </div>
    </div>
  );
};

export default ArtworkCard;
