const express = require('express');

const router = express.Router(); 

const {getAllProducts,getOneProduct, updateOneProduct} = require('../db/queries')

function validId(req,res,next){
    if(!isNaN(req.params.id)){
        return next();
    } else {
        next(new Error('Invalid ID'))
    }
}

function validProductUpdate(updatedProduct){
    const {color, price, productName, department} = updatedProduct;
    const validColor = typeof color === 'string';
    const validProductName = typeof productName === 'string';
    const validDepartment = typeof department === 'string';
    const validPrice = !isNaN(price);
    return validColor && validDepartment && validPrice && validProductName;
}

router.get('/', async (req,res) => {
    console.log(req.query)
    const products = await getAllProducts(req.query)
    res.json(products)
})

router.get('/:id', validId, async (req,res,next)=> {
    const product = await getOneProduct(req.params.id);
    if(product){
        res.json(product)
    } else {
        next()
    }
})

router.put('/:id', validId, async (req,res,next) => {
    if(validProductUpdate(req.body)){
        const products = await updateOneProduct(req.params.id, req.body);
        res.json(products[0])
    } else {
        next(new Error('Invalid product update'))
    }
})

module.exports = router;