import { Schema, model } from 'mongoose'

export const ordersSchema = new Schema({
  fullName: { type: String, required: true },
  streetNumber: { type: Number },
  streetName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  shippingCost: { type: Number },
  totalPrice: { type: Number },
  items: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      title: { type: String },
      price: { type: Number },
      quantity: { type: Number }
    }
  ],
  city: { type: String, required: true },
  isPay: { type: Boolean, default: false },
  extra: { type: String },
  createdAt: { type: Date, default: Date.now() }
})

export const Orders = model('Order', ordersSchema)
