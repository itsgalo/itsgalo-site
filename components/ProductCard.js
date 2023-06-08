import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const [option, setOption] = useState(product.option1[0]);
  const [price, setPrice] = useState(product.price[0]);

  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleImgClick = () => {
    setIsEnlarged(!isEnlarged);
  };
  

  const handlePriceChange = (e) => {
    let pidx = product.option1.indexOf(e.target.value);
    setPrice(product.price[pidx]);
  }
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.image} >
        <Image src={product.imageUrl}
        alt={product.description}
        fill
        className={styles['centered-image']}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onClick={handleImgClick}
        />
        {isEnlarged && (
        <div
          className={`${styles.enlarged} ${styles.fadeIn}`}
          onClick={handleImgClick}
        >
          <img src={product.imageUrl} alt={product.description} style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}
      </div>
      <h2 className={styles.title}>{product.name}</h2>
      <Link href={`/category/${product.category}`}>
        <h2 className={styles.category}>{product.category}</h2>
      </Link>
      <div className={styles.price}>
        <h2>${price}</h2>
        <div className={styles.dropdown}>
          <select 
            value={option}
            onChange={(e) => {
              setOption(e.target.value)
              handlePriceChange(e)
            }}>
            {product.option1.map((item, index) => {
              return (
                <option key={index} value={product.option1[index]}>SIZE (inches) {product.option1[index]}</option>
              )
            })}
          </select>
        </div>
      </div>
      <button 
        onClick={() => {
          product.option1idx = product.option1.indexOf(option)
          product.id = product.name+product.option1[product.option1idx]
          dispatch(addToCart(product))
        }}
        className={styles.button}>
          Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
