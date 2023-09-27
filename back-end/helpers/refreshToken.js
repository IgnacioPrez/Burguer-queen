import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()
export const generateRefreshToken = (id, res) => {
  const expiresIn = 60 * 60 * 24 * 30
  try {
    const refreshToken = jwt.sign({ id }, process.env.SECRET_PASSWORD_REFRESH, {
      expiresIn: '30d'
    })

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.MODO !== 'development',
      expires: new Date(Date.now() + expiresIn * 1000),
      sameSite: 'none'
    })
  } catch (error) {
    console.log(error)
  }
}
