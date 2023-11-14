import { config } from 'dotenv'
import { Server } from './model/server.js'
import { v2 as cloudinary } from 'cloudinary'
config()

function main () {
  const server = new Server()

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NICK,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    secure: true
  })
  server.listen()
}

main()
