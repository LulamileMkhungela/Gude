const express = require('express')
const app = express();

require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
 

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


//mongodb+srv://Kamzen:%40Kamzen1998@cluster0.xb7pk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb+srv://Gudee:<password>@cluster0.tisxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://Gudee:Addmore%40Digital@cluster0.tisxh.mongodb.net/gude-db?retryWrites=true&w=majority',{

},(err) => {
    if (err){
        console.log(err)
    }else{
        console.log('Mongoose Connected Successfully')
    }
})

//Import Middleware Routes
const authRoute = require('./routes/auth/authRoute')
const sellProductRoute = require('./routes/sell-product/sellProductRoute')
const addToCartRoute = require('./routes/add-to-cart/addToCartRoute')
const postRoute = require('./routes/chats/posts')
const conversationRoute = require('./routes/chats/conversations')
const messageRoute = require('./routes/chats/messages')


app.use('/auth', authRoute)
app.use('/products', sellProductRoute)
app.use('/add', addToCartRoute)
app.use('api/posts', postRoute)
app.use('api/conversations', conversationRoute)
app.use('api/messages', messageRoute)
app.get('/',(req,res) => {
    return res.status(200).json({
        msg : 'It Works Old Server'
    })
})

module.exports = app
