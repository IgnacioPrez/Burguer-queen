import { tokenGenerator } from '../../helpers/generateJWT.js'
import { sendEmail } from '../../mailer/mailer.js'
import { User } from '../model/user.model.js'
import bcryptjs from 'bcryptjs'
import randomString from 'randomstring'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
import { generateRefreshToken } from '../../helpers/refreshToken.js'

config()

export const register = async (req, res) => {
  const { userName, fullName, email, password, dni } = req.body

  try {
    if (await User.findOne({ email })) {
      res.status(401).json({
        message: 'El usuario ya se encuentra en nuestra base de datos'
      })
      return
    }

    const user = new User({ userName, fullName, email, password, dni, verified: false })
    const salt = bcryptjs.genSaltSync(15)
    user.password = bcryptjs.hashSync(password, salt)

    const newCode = randomString.generate(6)
    user.code = newCode

    await user.save()
    await sendEmail(email, newCode)

    res.status(200).json({
      user
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error en el servidor'
    })
    console.log(error)
  }
}

export const login = async (req, res) => {
  const { userName, password } = req.body

  try {
    const user = await User.findOne({ userName })
    if (!user) {
      res.status(400).json({
        message: 'No se encontró el correo en la Base de Datos.'
      })
      return
    }

    const verifiedPassword = bcryptjs.compareSync(password, user.password)

    if (!verifiedPassword) {
      res.status(400).json({
        message: 'La contraseña es incorrecta'
      })
      return
    }
    await tokenGenerator(user.id, res)
    const refreshToken = generateRefreshToken(user.id, res)
    res.status(200).json({
      id: user._id,
      userName: user.userName,
      fullName: user.fullName,
      refreshToken
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error en el servidor'
    })
  }
}

export const logout = (req, res) => {
  res.clearCookie('refreshToken')
  res.status(200).json({ ok: true })
}

export const profile = async (req, res) => {
  const { refreshToken } = req.cookies
  try {
    if (!refreshToken) throw new Error('No existe el token')
    const { id } = jwt.verify(refreshToken, process.env.SECRET_PASSWORD_REFRESH)
    const token = await tokenGenerator(id, res)

    return res.status(200).json({ token })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error del servidor' })
  }
}

export const verifyUser = async (req, res) => {
  const { email, code } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      res.status(400).json({
        message: 'No existe este usuario en la Base de Datos'
      })
      return
    }
    if (user.verified) {
      res.status(400).json({
        message: 'El usuario está correctamente verificado'
      })
      return
    }

    if (user.code !== code) {
      res.status(401).json({
        message: 'El codigo ingresado es incorrecto'
      })
      return
    }

    await User.findOneAndUpdate({ email }, { verified: true }, { new: true })
    res.status(200).json({
      message: 'Usuario verificado con éxito'
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Error en el servidor'
    })
  }
}
