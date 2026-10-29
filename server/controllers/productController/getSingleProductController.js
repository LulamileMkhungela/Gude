const Product = require('../../models/Product');
const User = require('../../models/User')
const getSingleProductController = async (req, res) => {

    const product = Product.findById({_id: req.body.product_id}, (err, respData) => {
        if (err) {
            return res.status(200).json({
                err: true,
                msg: err.message
            })
        } else {
            User.findById({_id: respData._user_id}, (err, userData) => {
                if (err) {
                    return res.status(200).json({
                        err: true,
                        msg: err.message
                    })
                } else {
                    return res.status(200).json({
                        err: false,
                        product_info: respData,
                        user_info: userData
                    })
                }
            })
        }
    })

}
module.exports = getSingleProductController