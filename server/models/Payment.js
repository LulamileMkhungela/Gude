const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    _user_id: {
        type: String,
        required: true
    },
    product_id: { 
        type: String
    },
    delivery: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    street1: {
        type: String,
    },
    street2: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    payment: {
        type: String,
    },
    price: {
        type: String,
    }
},{
    timestamps : true
});

const paymentData = mongoose.model('payment', paymentSchema);
module.exports = paymentData;