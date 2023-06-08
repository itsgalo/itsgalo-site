// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getProducts } from '../../../utils/localdata';

export default async function handler(req, res) {
    const products = await getProducts();
    const {productId} = req.query;
    const product = products.find(p => p.id === productId);
    if (!product) {
        res.status(404).json({});
        return ;
    }
    //const snipcartProduct = {...product, imageUrl: product?.imageUrl.src ?? ""}

    res.status(200).json(product);
}