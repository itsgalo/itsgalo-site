import ProductCard from "./ProductCard";
import styles from '../styles/ProductCard.module.css';

function ProductList({products}) {
    return (
        <div className={styles.list}>
            {products.map((product, index) => (
            <ProductCard product={product} key={index}/>))}
        </div>
    )
}


export default ProductList