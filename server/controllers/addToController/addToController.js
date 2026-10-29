
const Cart = require('../../models/Cart')
const mongoose = require("mongoose");

module.exports = {
    addToCartController: (req, res) => {
        const {
            category,
            product_img_url,
            title,
            desc,
            condition,
            price,
            quantity,
            location,
            payment_method,
            _user_id,
            _product_id
        } = req.body

        Cart.findOne({_product_id : _product_id, _user_id : _user_id}, (e, adv) => {
            if (e) {
                return res.status(200).json({
                    err: true,
                    msg: e.message
                })
            } else {
                if (adv) {
                    return res.status(200).json({
                        err: true,
                        msg: 'Item Already Added To Your Cart'
                    })
                } else {
                    const cart = new Cart({
                        _id : mongoose.Types.ObjectId(),
                        category,
                        product_img_url,
                        imei: req.body.imei ? req.body.imei : null,
                        isbn: req.body.isbn ? req.body.isbn : null,
                        title,
                        desc,
                        condition,
                        price,
                        quantity,
                        location,
                        payment_method,
                        _user_id,
                        _product_id,
                    })

                    cart.save((e, result) => {
                        if (e) {
                            return res.status(200).json({
                                err: true,
                                msg: e.message
                            })
                        } else {
                            const cart = Cart.find({_user_id : _user_id})
                            cart.count((err, count) => {
                                if (err) {
                                    return res.status(200).json({
                                        err: true,
                                        msg: e.message
                                    })
                                } else {
                                    return res.status(201).json({
                                        err: false,
                                        msg: 'Item Added To Cart Successfully',
                                        count: count,
                                    })
                                }
                            })
                        }
                    })
                }
            }
        })
    },

    cartCount : (req,res) => {
        const cart = Cart.find({_user_id : req.body._user_id})
        cart.count((e,count) => {
            if (e){
                return res.status(200).json({
                    err : true,
                    msg : e
                })
            }else{
                return res.status(200).json({
                    err : false,
                    count : count
                })
            }
        })
    },
    fetchCartItems : (req,res) => {
        console.log(req.body._user_id)
        Cart.find({_user_id : req.body._user_id}, (e,cartData) => {
            if (e){
                res.status(200).json({
                    err : true,
                    msg : 'Error Fetching Fetching Cart Items'
                })
            }else{
                if (cartData.length > 0) {
                    return res.status(200).json({
                        err : false,
                        msg : 'Items Fetched',
                        cart_data : cartData
                    })
                }else{
                    return res.status(200).json({
                        err : false,
                        count : cartData.length,
                        msg : 'No Items Added In Your Cart'
                    })
                }
            }
        })
    },
    deleteCartItem : (req,res) => {
        console.log(req.body._id)
        Cart.findByIdAndDelete(req.body._id, (err) => {
            if (err) {
                return res.status(200).json({
                    err : true,
                    msg : 'Deleting Item Took Too Long To Respond'
                })
            }else{
                return res.status(200).json({
                    err : false,
                    msg : 'Item Deleted'
                })
            }
        })
    }
}
