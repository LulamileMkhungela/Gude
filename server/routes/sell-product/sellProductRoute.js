const express = require('express');

const router = express.Router();

const sellProductController = require('../../controllers/productController/sellProductController')
const getAllProductsController = require('../../controllers/productController/getAllProductsController')
const searchProductsController = require('../../controllers/productController/searchProductsController')
const getSingleProductController = require('../../controllers/productController/getSingleProductController');
const {body} = require("express-validator");


const validatePost = [
    body('category', 'Category Required').notEmpty(),
    body('title','Title Required').notEmpty(),
    body('desc','Description Required').notEmpty(),
    body('condition','Condition Required').notEmpty(),
    body('price','Price Required').notEmpty(),
    body('quantity','Quantity Required').notEmpty(),
    // body('category').custom(val => {
    //     if (body('other').notEmpty()){
    //         throw new Error('Other Category Required')
    //     }
    // })

]

/*
    Routes Related To Selling A Product, Updating It, Deleting It,
 */

router.post('/sell',  validatePost, sellProductController)

/*
    Fetch All Products Route
 */
router.get('/', getAllProductsController)

/*
    Search Products Route
 */
router.post('/search', searchProductsController)

/*
    Get Single Product
 */

router.post('/single-product', getSingleProductController)

module.exports = router

