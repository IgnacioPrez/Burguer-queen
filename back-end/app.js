import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import cookieParser from 'cookie-parser'
import ordersRouter from './routes/orders.routes.js'
import paymentRoutes from './routes/payment.routes.js'
import { ALLROUTES } from './helpers/constants.js'

const app = express()

config()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(ALLROUTES.USER_ROUTES, userRoutes)
app.use(ALLROUTES.ORDER_ROUTES, ordersRouter)
app.use(ALLROUTES.PRODUCT_ROUTES, productRoutes)
app.use(ALLROUTES.PAYMENT_ROUTES, paymentRoutes)

export default app
