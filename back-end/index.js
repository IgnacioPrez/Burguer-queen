import { config } from 'dotenv'
import { Server } from './model/server.js'
import { v2 as cloudinary } from 'cloudinary'
import { Server as SocketServer } from 'socket.io'
import { Order } from './order/model/order.model.js'

config()

const server = new Server()
const io = new SocketServer(server.socketServer, {
  cors: {
    origin: 'http://localhost:5173'
  }
})
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NICK,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
  secure: true
})

io.on('connection', socket => {
  console.log('Client connected')
})
Order.watch().on('change', (change) => {
  console.log('Algo cambio')
  io.emit('changes', change)
})

server.listen()
