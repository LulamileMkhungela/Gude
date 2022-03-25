const express = require('express')
const router = express.Router();

const addToController = require('../../controllers/addToController/addToController')

router.post('/cart', addToController.addToCartController)
router.post('/cart/count', addToController.cartCount)
router.post('/cart/all', addToController.fetchCartItems)
router.post('/cart/delete', addToController.deleteCartItem)

module.exports = router