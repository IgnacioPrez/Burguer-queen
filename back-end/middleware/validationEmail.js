import { sendEmail } from '../mailer/mailer.js'
import { User } from '../auth/model/user.model.js'

export const existEmail = async (email) => {
  const thisEmailInDB = await User.findOne({ email })

  if (thisEmailInDB && thisEmailInDB.verified) {
    throw new Error(`The email ${email} has already been registered.`)
  }

  if (thisEmailInDB && !thisEmailInDB.verified) {
    await sendEmail(email, thisEmailInDB.code)
    throw new Error(`The user is now registered. The verification code was sent again to ${email}.`)
  }
}
