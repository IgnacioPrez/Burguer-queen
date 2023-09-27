import { Schema, model } from 'mongoose'

export const productSchema = new Schema({
  title: { type: String, required: [true, 'El producto requiere un nombre'] },
  description: { type: String, required: [true, 'El producto require una descripción'] },
  image: {
    type: {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },
    required: true
  },
  createdAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
  stock: { type: Boolean, default: true },
  price: { type: Number },
  category: { type: String, required: [true, 'El producto necesita una categoría'] }
})

export const Product = model('Product', productSchema)
