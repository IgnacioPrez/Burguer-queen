import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'

const app = express()

config()
app.use(cors())
app.use(express.json())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './temp'
}))

export const PORT = process.env.PORT
app.listen(PORT)

console.log(`Server on port ${PORT}`)
