import bcryptjs from 'bcryptjs'
import randomString from 'randomstring'
import { sendEmail } from '../../mailer/mailer.js'
import { User } from '../model/user.model.js'
import { generateRefreshToken } from '../../helpers/refreshToken.js'
import { tokenGenerator } from '../../helpers/generateJWT.js'
import { config } from 'dotenv'
import jwt from 'jsonwebtoken'

config()
export class AuthService {
  async createUser (user) {
    const salt = bcryptjs.genSaltSync(15)
    user.password = bcryptjs.hashSync(user.password, salt)
    const newCode = randomString.generate(6)
    user.code = newCode
    await user.save()
    await sendEmail(user.email, newCode)
    return user
  }

  async logg (email, res) {
    const user = await User.findOne({ email })
    if (user) {
      generateRefreshToken(user._id, res)
      return {
        id: user._id,
        userName: user.userName,
        fullName: user.fullName
      }
    }
  }

  async createToken (refreshToken, res) {
    const { id } = jwt.verify(refreshToken, process.env.SECRET_PASSWORD_REFRESH)
    const token = await tokenGenerator(id, res)
    return token
  }

  async verifyUser (email) {
    await User.findOneAndUpdate({ email }, { verified: true }, { new: true })
  }
}

export class AuthValidate {
  async userExists (email) {
    const user = await User.findOne({ email })
    return user
  }

  async verifiedPassword (email, password) {
    const user = await User.findOne({ email })
    const verified = bcryptjs.compareSync(password, user.password)
    return verified
  }

  async verifiedUser (email) {
    const data = await User.findOne({ email })
    if (data) {
      const { verified, code } = data
      return {
        verified, code
      }
    }
  }
}
