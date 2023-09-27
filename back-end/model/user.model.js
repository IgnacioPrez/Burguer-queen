import { Schema, model } from 'mongoose'
import { ROLES } from '../helpers/constants.js'

const userSchema = new Schema({
  userName: { type: String, required: [true, 'El nombre de usuario es requerido'] },
  fullName: { type: String, required: [true, 'El nombre  es requerido'] },
  email: { type: String, required: [true, 'El email es obligatorio'] },
  password: { type: String, required: [true, 'La contraseña es obligatorio'] },
  dni: { type: String, required: true },
  code: { type: String },
  verified: { type: Boolean, default: false },
  roles: { type: String, default: ROLES.user }
})

userSchema.methods.toJSON = function () {
  const { __v, password, _id, code, ...usuario } = this.toObject()
  return usuario
}

export const User = model('User', userSchema)
