
/*
    Create Http Server
 */
const http = require('http')
const app = require('./app')

const server = http.createServer(app)

const port = process.env.PORT || 8080

try {
    server.listen(port)
    console.log(`server is up and running on port: ${port}`)
} catch (err) {
    console.log(err)
s}
