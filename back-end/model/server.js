import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import userRoutes from '../auth/routes/auth.routes.js'
import productRoutes from '../product/routes/product.routes.js'
import cookieParser from 'cookie-parser'
import orderRoutes from '../order/routes/orders.routes.js'
import paymentRoutes from '../payment/routes/payment.routes.js'
import { connectDB } from '../config/db.js'

config()
export class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT
    this.userRoute = '/user'
    this.orderRoute = '/orders'
    this.paymentRoute = '/payment'
    this.productRoute = '/product'
    this.startDb()
    this.middlewares()
    this.routes()
  }

  async startDb () {
    await connectDB()
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Listening on port: ${this.port}`)
    })
  }

  middlewares () {
    this.app.use(cors({
      origin: 'http://localhost:5173',
      credentials: true
    }))
    this.app.use(express.json())
    this.app.use(cookieParser())
  }

  routes () {
    this.app.use(this.userRoute, userRoutes)
    this.app.use(this.orderRoute, orderRoutes)
    this.app.use(this.productRoute, productRoutes)
    this.app.use(this.paymentRoute, paymentRoutes)
  }
}
