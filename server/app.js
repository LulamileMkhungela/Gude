const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const DB_connection = require('./config/db')

//Import Middleware Routes
const authRoute = require('./routes/auth/authRoute')
const sellProductRoute = require('./routes/sell-product/sellProductRoute')
const addToCartRoute = require('./routes/add-to-cart/addToCartRoute')
const wishlistRoute = require('./routes/add-to-wishlist/wishList')
const conversationRoute = require('./routes/chats/conversations')
const messageRoute = require('./routes/chats/messages')
const userRoute = require('./routes/users/users')
const paymentRoute = require('./routes/payment-modal/paymentModal')

const app = express();
require('dotenv').config()
DB_connection()

app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
    credentials : true,
    origin : true,
    withCredentials : true
}))
app.use(fileUpload({ useTempFiles: true }))
app.use(cookieParser())

app.use('/product-images', express.static(__dirname + '/product-images'));
app.use('/auth', authRoute)
app.use('/products', sellProductRoute)
app.use('/add', addToCartRoute)
app.use('/api/wishlist', wishlistRoute)
app.use('/api/users', userRoute)
app.use('/api/conversations', conversationRoute)
app.use('/api/messages', messageRoute)
//app.use('/api/modal', paymentRoute)

app.get('/',(req,res) => {
    return res.status(200).json({
        msg : 'It Works Old Server'
    })
})

module.exports = app