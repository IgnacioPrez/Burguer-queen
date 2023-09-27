import { sendEmail } from '../mailer/mailer.js'
import { User } from '../model/user.model.js'

export const existEmail = async (email) => {
  const thisEmailInDB = await User.findOne({ email })

  if (thisEmailInDB && thisEmailInDB.verified) {
    throw new Error(`El correo ${email} ya esta registrado`)
  }

  if (thisEmailInDB && !thisEmailInDB.verified) {
    await sendEmail(email, thisEmailInDB.code)
    throw new Error(`El usuario ya está registrado. Se envió nuevamente el código de verificación a ${email}`)
  }
}
