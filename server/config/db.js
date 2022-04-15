const mongoose = require('mongoose')

const DB_connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit()
    }
}

module.exports = DB_connection

//mongodb+srv://Kamzen:%40Kamzen1998@cluster0.xb7pk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb+srv://Gudee:<password>@cluster0.tisxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority