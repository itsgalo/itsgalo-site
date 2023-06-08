// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getProductsByCategory } from '../../../utils/localdata';

export default async function handler(req, res) {
    const products = await getProductsByCategory(req.query.category);

    if (!req.query.category) {
        res.status(404).json({});
        return ;
    }
    //const product = {...product, imageUrl: product?.imageUrl.src ?? ""}

    res.status(200).json(products);
}