import { Schema, model } from 'mongoose'

export const paymentSchema = new Schema({
  ordersId: { type: Schema.Types.ObjectId, ref: 'Order', require: true },
  statusPaid: { type: Boolean },
  createdAt: { type: Date, default: Date.now() },
  paymentData: { type: Object, require: true }
})

export const Payment = model('Pay', paymentSchema)
