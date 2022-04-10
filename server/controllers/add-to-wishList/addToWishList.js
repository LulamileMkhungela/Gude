const WishList = require('../../models/WishList')

module.exports = {
    addToWishListController: (req, res) => {
        const {
            _id,
            category,
            product_img_url,
            title,
            desc,
            condition,
            price,
            quantity,
            location,
            payment_method,
            _user_id
        } = req.body

        WishList.findById(_id, (e, adv) => {
            if (e) {
                return res.status(200).json({
                    err: true,
                    msg: e.message
                })
            } else {
                if (adv) {
                    return res.status(200).json({
                        err: true,
                        msg: 'Item Already Added To Your wish list'
                    })
                } else {
                    const wishlist = new WishList({
                        _id,
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
                    })

                    wishlist.save((e, result) => {
                        if (e) {
                            return res.status(200).json({
                                err: true,
                                msg: e.message
                            })
                        } else {
                            const wishlist = WishList.find({_user_id : _user_id})
                            wishlist.count((err, count) => {
                                if (err) {
                                    return res.status(200).json({
                                        err: true,
                                        msg: e.message
                                    })
                                } else {
                                    return res.status(201).json({
                                        err: false,
                                        msg: 'Item Added To wish list Successfully',
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

    wishListCount : (req,res) => {
        const wishlist = Cart.find({_user_id : req.body._user_id})
        wishlist.count((e,count) => {
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
    fetchWishListItems : (req,res) => {
        console.log(req.body._user_id)
        WishList.find({_user_id : req.body._user_id}, (e,wishListData) => {
            if (e){
                res.status(200).json({
                    err : true,
                    msg : 'Error Fetching Fetching Cart Items'
                })
            }else{
                if (wishListData.length > 0) {
                    return res.status(200).json({
                        err : false,
                        msg : 'Items Fetched',
                        wish_list_data : wishListData
                    })
                }else{
                    return res.status(200).json({
                        err : false,
                        count : wishListData.length,
                        msg : 'No Items Added to wish list'
                    })
                }
            }
        })
    },
    deleteWishListItem : (req,res) => {
        console.log(req.body._id)
        WishList.findByIdAndDelete(req.body._id, (err) => {
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
