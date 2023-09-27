import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import cookieParser from 'cookie-parser'

const app = express()

config()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/user', userRoutes)
app.use('/product', productRoutes)

export default app
