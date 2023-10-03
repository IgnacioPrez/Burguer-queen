import { Product } from '../model/product.model.js'

export const validateProductIds = async (req, res, next) => {
  const { items } = req.body

  const allProducts = await Product.find({ stock: true })

  const existId = allProducts.some((product) => {
    return items.every((item) => item._id === product._id.toString())
  })
  if (!existId) {
    res.status(400).json({ message: 'El Id del producto no es válido' })
    return
  }

  next()
}
