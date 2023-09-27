import { config } from 'dotenv'

config()
export const ROLES = {
  admin: '50yun4admin',
  user: '50yun53r'
}

export const PORT = process.env.PORT

export const CATEGORIES = {
  BURGUER: 'burguer',
  FRIES: 'fries'
}
