import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()
export const generateRefreshToken = (id, res) => {
  const expiresIn = 60 * 60 * 24 * 30

  try {
    const refreshToken = jwt.sign({ id }, process.env.SECRET_PASSWORD_REFRESH, {
      expiresIn
    })

    res.cookie('refreshToken', refreshToken, {
      maxAge: expiresIn * 1000,
      httpOnly: true,
      secure: process.env.MODO === 'development'
    })
  } catch (error) {
    console.log(error)
  }
}
