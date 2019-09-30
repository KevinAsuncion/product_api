'use strict'

const express = require('express');
const router = express.Router();
const {validId, validProductUpdate} = require('../middleware/validate')
const {getAllProducts,getOneProduct,updateOneProduct} = require('../db/queries');

router.get('/', async (req,res) => {
    const {productName, price, color, department} = req.query;
    const products = await getAllProducts({productName,price,color,department});
    res.json(products);
})

router.get('/:id', validId, async (req,res,next)=> {
    const product = await getOneProduct(req.params.id);
    if(product){
        res.json(product);
    } else {
        next();
    };
});

router.put('/:id', validId, async (req,res,next) => {
    if(validProductUpdate(req.body)){
        const products = await updateOneProduct(req.params.id, req.body);
        res.json(products[0])
    } else {
        next(new Error('Invalid product update'))
    }
})

module.exports = router;