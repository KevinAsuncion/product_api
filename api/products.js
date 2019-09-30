const express = require('express');

const router = express.Router(); 

const {getAllProducts,getOneProduct} = require('../db/queries')

function validId(req,res,next){
    if(!isNaN(req.params.id)){
        return next();
    } else {
        next(new Error('Invalid ID'))
    }
}

router.get('/', async (req,res) => {
    const products = await getAllProducts()
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

router.put('/:id', (req,res,next) => {

})

module.exports = router;