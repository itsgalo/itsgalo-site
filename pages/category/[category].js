import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/Shop.module.css';
import { getProductsByCategory } from '../../utils/localdata';

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Results for {router.query.category}</h1>
      </div>
      <div className={styles.list}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}