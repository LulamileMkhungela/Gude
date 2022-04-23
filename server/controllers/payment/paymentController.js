const paymentData = require('../../models/Payment');

module.exports = {
    insertPaymentData :  async (req, res) => {
        const _user_id = req.body._user_id
        const product_id = req.body.product_id
        const delivery = req.body.delivery
        const phoneNumber = req.body.phoneNumber
        const street1 = req.body.street1
        const street2 = req.body.street2 
        const city = req.body.city
        const state = req.body.state
        const country = req.body.country
        const payment = req.body.payment
        const price = req.body.price

        const PaymentData = new paymentData({
            _user_id: _user_id,
            product_id: product_id,
            delivery: delivery,
            phoneNumber: phoneNumber,
            street1: street1,
            street2: street2,
            city: city,
            state: state,
            country: country,
            payment: payment,
            price: price,
        })

        try {
            await PaymentData.save()
            res.status(200).json({
                err: true,
                msg: 'Data inserted successfully'
            })
        } catch (err) {
            console.log(err)
        }   
    },

    /*updatePaymentData: async (req, res) => {
        const newDelivery = req.body.newDelivery
        const newPhoneNumber = req.body.newPhoneNumber
        const newStreet1 = req.body.newStreet1
        const newStreet2 = req.body.newStreet2 
        const newCity = req.body.newCity
        const newState = req.body.newState
        const newCountry = req.body.newCountry
        const newPayment = req.body.newPayment
        const id = req.body.id

        try {
            await paymentData.findById(id,(err, updated) => {
            updated.delivery = newDelivery,
            updated.phoneNumber = newPhoneNumber,
            updated.street1 = newStreet1,
            updated.street2 = newStreet2,
            updated.city = newCity,
            updated.state = newState,
            updated.country = newCountry,
            updated.payment = newPayment

            updated.save()
            res.status(200).json({
                error: true,
                msg: 'data has been updated successfully'
            })
        })
        } catch (err) {
            console.log(err)
        }
    }*/
} 
