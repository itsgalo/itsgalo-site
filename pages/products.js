import { getLocalData } from '../utils/localdata';

export default function products({products}) {
  return (
      {products}
  )
}

export async function getStaticProps() {
  const products = await getLocalData()
  return {
      props: {
          products
      }
  }
}