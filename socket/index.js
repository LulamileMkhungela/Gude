const io = require('socket.io')(8900,{
    cors : {
        origin : 'http://localhost:3000',
        method : ['GET','POST']
    }
})

let users = []

const addUser = (userId,socketId) =>{
    !users.some((user) => user.userId === userId) && users.push(userId,socketId)
}

io.on('connection',socket => {
    console.log(socket.id,'User Connected')
    io.emit('msg','This Sending Of Msg From Socket Server')
    socket.on('addUser', userId => {
        addUser(userId,socket.id)
        io.emit('getUsers', users)
    })
})