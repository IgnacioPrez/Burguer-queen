import { User } from '../model/user.model.js'
import { config } from 'dotenv'
import { AuthService, AuthValidate } from '../service/auth.service.js'

config()

// TODO: ERROR AL MANIPULAR EL TOKEN PARA FUTURAS PETICIONES

export const register = async (req, res) => {
  const { userName, fullName, email, password, dni } = req.body
  const services = new AuthService()

  try {
    const prevUser = new User({ userName, fullName, email, password, dni, verified: false })
    const user = await services.createUser(prevUser)
    res.status(200).json({
      user
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error on the server'
    })
  }
}
export const login = async (req, res) => {
  const { email, password } = req.body
  const services = new AuthService()
  const validation = new AuthValidate()

  try {
    const [existsUser, passwordCorrect] = await Promise.all([validation.userExists(email), validation.verifiedPassword(email, password)])
    if (!existsUser && !passwordCorrect) {
      res.status(404).json({
        message: 'Usuario no encontrado/ credenciales incorrectas.'
      })
      return
    }
    const user = await services.logg(email, res)

    res.status(200).json({
      user
    })
  } catch (error) {
    console.error(error.message)
    res.status(400).json({
      message: 'Error en el servidor'
    })
  }
}

export const logout = (req, res) => {
  res.clearCookie('refreshToken')
  res.status(200).json({ ok: true })
}

// TODO: CON ESTA RUTA REALIZAR TODAS LAS PETICIONES DEL ADMIN
export const profile = async (req, res) => {
  const { id } = req.body.userConfirmed
  const services = new AuthService()

  try {
    const token = await services.createToken(id, res)
    return res.status(200).json({ token })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error del servidor' })
  }
}

export const verifyUser = async (req, res) => {
  const { email, code } = req.body
  const validation = new AuthValidate()
  const services = new AuthService()

  try {
    const [foundUser, credentialasVerified] = await Promise.all([validation.userExists(email), validation.verifiedUser(email)])
    if (!foundUser) {
      res.status(400).json({
        message: 'No existe este usuario en la Base de Datos'
      })
      return
    }
    if (!credentialasVerified.verified && credentialasVerified.code !== code) {
      res.status(401).json({
        message: 'El usuario no se encuentra correctamente verificado. Revise el codigo de verificación en su correo.'
      })
      return
    }
    await services.verifyUser(email)
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
