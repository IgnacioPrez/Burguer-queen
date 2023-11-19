import { Product } from '../product/model/product.model.js'

export const validateProductIds = async (req, res, next) => {
  const { items } = req.body

  const allProducts = await Product.find({ stock: true })

  const existsInDB = allProducts.some((product) => {
    return items.every((item) => item._id === product._id.toString())
  })

  if (!existsInDB) {
    res.status(400).json({ message: 'Algunos productos no corresponden a la base de datos' })
    return
  }
  next()
}
