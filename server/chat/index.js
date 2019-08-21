function init(io) {
  let users = []

  function logout(id) {
    users = users.filter(user => user.id !== id)
  }

  io.on('connection', function (socket) {
    console.log('socket is connected')
    console.log(socket.id)

    socket.on('login', username => {
      const user = {
        username: username,
        id: socket.id
      }
      users.push(user)
      console.log(users)

      io.emit('new login', username)
    })
    socket.on('new message', message => {
      socket.join(message.room)
      socket.join('generala')
      console.log(message)
      io.to(message.room).emit('receive message', message)
    })
    socket.on('logout', () => {
      logout(socket.id)
    })
    socket.on('disconnect', () => {
      logout(socket.id)
    })

  })
}

module.exports = init