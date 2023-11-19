import jwt from 'jsonwebtoken'
import { User } from '../auth/model/user.model.js'
import { config } from 'dotenv'

config()

export const validateJWT = async (req, res, next) => {
  const { refreshToken } = req.cookies

  try {
    if (!refreshToken) {
      res.status(401).json({
        message: 'No existe un token en la petición'
      })
      return
    }
    const payload = jwt.verify(refreshToken, process.env.SECRET_PASSWORD_REFRESH)
    const userConfirmed = await User.findById({ _id: payload.id })

    if (!userConfirmed) {
      res.status(401).json({
        message: 'Token invalido'
      })
      return
    }

    req.body.userConfirmed = userConfirmed
    next()
  } catch (err) {
    console.log(err)
    res.status(401).json({
      message: 'Token no válido'
    })
  }
}
