const express = require('express')
const router = express.Router();

const addToWishList = require('../../controllers/add-to-wishList/addToWishList')

router.post('/', addToWishList.addToWishListController)
router.post('/count', addToWishList.wishListCount)
router.post('/all', addToWishList.fetchWishListItems)
router.post('/delete', addToWishList.deleteWishListItem)

module.exports = router