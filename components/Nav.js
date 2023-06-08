import Link from 'next/link'
import EthButtons from './EthButtons'
import TezButtons from './TezButtons'
import Clock from './Clock'
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';

function Nav() {

    function changeBackground(e) {
        //e.target.style.backgroundColor = 'red';
    }
    const cart = useSelector((state) => state.cart);
  
    const getTotalPrice = () => {
      return cart.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price[item.option1idx],
        0
      );
    };

  return (
    <header className={styles.navbar}>
        <div className={styles.topbar}>
            <Clock />
            <div>
                <EthButtons />
                <TezButtons />
            </div>
        </div>
        <ul className={styles.links}>
            <li className={styles.navlink}>
            <Link href="/">@itsgalo</Link>
            </li>
            <li className={styles.navlink}>
            <Link href="/about">about</Link>
            </li>
            <li className={styles.navlink}>
            <Link href="/artworks">artworks</Link>
            </li>
            <li className={styles.navlink}>
            <Link href="/writing">writing</Link>
            </li>
            <li className={styles.navlink}>
            <Link href="/teaching">teaching</Link>
            </li>
            <li className={styles.navlink}>
            <Link href="/shop">print shop</Link>
            </li>
            <li className={styles.lastlink}>
            <Link href="/cart">
                <span className="cart-total">cart: ${getTotalPrice()}</span>
            </Link>
            </li>
        </ul>
    </header >
  )
}

export default Nav