import { Schema, model } from 'mongoose'

export const ordersSchema = new Schema({
  fullName: { type: String, required: [true, 'El nombre del destinatario es necesario'] },
  streetNumber: { type: Number },
  streetName: { type: String, required: [true, 'La dirección es obligatoria'] },
  phoneNumber: { type: Number, required: [true, 'Es necesario el contacto del cliente'] },
  shippingCost: { type: Number },
  totalPrice: { type: Number },
  totalProducts: { type: Schema.Types.ObjectId, required: [true, 'Se requieren los productos'] }
})

export const Orders = model('Orders', ordersSchema)
