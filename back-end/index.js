import app from './app.js'
import { connectDB } from './config/db.js'
import { PORT } from './helpers/constants.js'
import { v2 as cloudinary } from 'cloudinary'
import { config } from 'dotenv'

config()
async function main () {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NICK,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    secure: true
  })
  await connectDB()
  app.listen(PORT)
  console.log(`Listening on port: ${PORT}`)
}

main()
