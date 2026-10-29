
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        category: {
            type: String,
            required: true,
        },
        other: {
            type: String,
        },
        product_img_url: {
            type: Array,
        },
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true,
        },
        condition: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        payment_method: {
            type: String,
            required: true
        },
        _user_id: {
            type: String,
            required: true
        },
        _product_id : {
            type : String,
            required : true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Cart', cartSchema);