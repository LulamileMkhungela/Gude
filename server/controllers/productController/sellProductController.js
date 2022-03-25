
const mongoose = require('mongoose')
const Product = require('../../models/Product')

const sellProductController = (req,res) => {

    /*
        Assign Request Body and Request Files
     */

    const payLoad = req.body
    const fileLoad = req.files

    console.log(fileLoad)
    return 0;
    /*
        Check If All Fields Are Not Empty
     */

    if (payLoad.category === 'Select Category' || !fileLoad || payLoad.title.length <= 0 || payLoad.desc.length <= 0 ||
        payLoad.condition === 'Select Condition' || payLoad.price.length <= 0 || payLoad.quantity.length <= 0 || payLoad.location.length <= 0){
        return res.status(422).json({
            err : true,
            msg : 'All Fields Required'
        })
    }else{

        const fileObj = fileLoad.product_img_url
        /*
            Check Image Type
         */
        const mimeType = fileObj.mimetype
        const fileType = mimeType.split('/')[0]
        if (fileType !== 'image'){

            return res.status(200).json({
                err : true,
                msg : 'File Type Is Not Allowed'
            })

        } else{

            /*
                Check Image Size
             */

            if (fileLoad.product_img_url.size > 25000000){

                return res.status(200).json({
                    err : true,
                    msg : 'Image Size Greater Than 25MB Not Accepted'
                })

            }
           else{

                fileObj.mv('./product-images/' + fileObj.name, async error => {
                    if (error){
                        return res.status(200).json({
                            err : true,
                            msg : error.message
                        })
                    }else{
                        /*
                            If Category Other, Other Input Is Required
                         */
                        if (payLoad.category === 'other'){
                            if (payLoad.other.length <= 0){
                                return res.status(200).json({
                                    err : true,
                                    msg : 'Other Category Field Is Required'
                                })
                            }
                            
                        }
                        /*
                            Create A New Instance Product
                       */
                        const product = new Product({
                            _id : mongoose.Types.ObjectId(),
                            category : payLoad.category,
                            product_img_url : 'http://localhost:8080/product-images/' + fileObj.name,
                            imei : payLoad.imei ? payLoad.imei : null,
                            isbn : payLoad.isbn ? payLoad.isbn : null,
                            title : payLoad.title,
                            desc : payLoad.desc,
                            condition : payLoad.condition,
                            price : payLoad.price,
                            quantity : payLoad.quantity,
                            location : payLoad.location,
                            payment_method : 'paypal',
                            _user_id : payLoad._user_id,
                        })

                        product.save((err,result) => {

                            if (err){
                                console.log(err.message)
                            }else{
                                return res.status(201).json({
                                    err : false,
                                    msg : 'Product Created Successfully',
                                    result : result
                                })
                            }

                        })
                    }
                })
            }

        }

    }

}

module.exports = sellProductController