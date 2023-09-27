import jwt from 'jsonwebtoken'
import { User } from '../model/user.model.js'
import { config } from 'dotenv'

config()

export const validateJWT = async (req, res, next) => {
  const { token } = req.cookies

  if (!token) {
    res.status(401).json({
      message: 'No existe un token en la petición'
    })
    return
  }

  try {
    const secretKey = process.env.SECRET_PASSWORD
    const payload = jwt.verify(token, secretKey)
    const { id } = payload
    const userConfirmed = await User.findById({ _id: id })

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
