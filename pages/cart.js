import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  emptyCart
} from '../redux/cart.slice';
import Checkout from '../components/Checkout';
import styles from '../styles/Cart.module.css';

const CartPage = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price[item.option1idx], 0);
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <div className={styles.empty}>
          <h1>no items to display</h1>
        </div>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item, index) => (
            <div className={styles.body} key={index}>
              <div className={styles.image}>
                <Image src={item.imageUrl}
                alt={item.description}
                fill
                className={styles['centered-image']}
                />
              </div>
              <p>{item.name + " (print), " + item.option1[item.option1idx]}</p>
              <p>${item.price[item.option1idx]}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>x</button>
              </div>
              <p>${item.quantity * item.price[item.option1idx]}</p>
            </div>
          ))}
          <div className={styles.total}>
            <h2>total: ${getTotalPrice()}</h2>
          </div>
          <Checkout cart={cart}/>
        </>
      )}
    </div>
  );
};

export default CartPage;