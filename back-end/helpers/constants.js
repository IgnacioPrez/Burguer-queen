import { config } from 'dotenv'

config()
export const ROLES = {
  admin: '50yun4admin',
  user: '50yun53r'
}

export const PORT = process.env.PORT

export const CATEGORIES = ['burguer', 'fries']

export const ALLROUTES = {
  USER_ROUTES: '/user',
  PRODUCT_ROUTES: '/product',
  ORDER_ROUTES: '/orders',
  PAYMENT_ROUTES: '/payment'
}
