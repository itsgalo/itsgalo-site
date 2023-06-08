import { getProducts } from '../../../utils/localdata';

export default async function handler(req, res) {
    const products = await getProducts();
    res.status(200).json(products);
}