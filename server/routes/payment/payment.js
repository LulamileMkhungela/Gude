const express = require('express')
const router = express.Router()

const paymentController = require('../../controllers/payment/paymentController') 

router.post('/', paymentController.insertPaymentData)
//router.put('/update/:id', paymentController.updatePaymentData)

module.exports = router