import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export const tokenGenerator = (id, res) => {
  return new Promise((resolve, reject) => {
    const payload = { id }
    jwt.sign(
      payload,
      process.env.SECRET_PASSWORD,
      {
        expiresIn: '15m'
      },
      (err, token) => {
        if (err) {
          reject(new Error('Error al generar un token'))
        } else {
          resolve(token)
        }
      }
    )
  })
}
