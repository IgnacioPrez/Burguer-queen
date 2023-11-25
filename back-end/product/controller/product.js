import { ProductService, ProductValidate } from '../service/product.service.js'

export const createProduct = async (req, res) => {
  const productData = req.body
  const existPathImage = req.files?.image
  const services = new ProductService()
  const validate = new ProductValidate()
  try {
    if (!validate.correctCategory(productData) || !existPathImage) {
      res.status(401).json({ message: 'El producto no cuenta con caracteristicas válidas' })
      return
    }
    if (await validate.existsProduct(productData)) return res.status(401).json({ message: 'El producto ya existe' })

    const product = await services.createProductInDB(productData, existPathImage)
    await product.save()
    return res.status(200).json({
      product
    })
  } catch (err) {
    console.error(err)
    throw new Error(`Ocurrio un error al crear el producto: --> ${err}`)
  }
}

export const getProducts = async (req, res) => {
  const page = req.query.page || 1
  const limit = req.query.limit || 10
  const services = new ProductService()
  try {
    const result = await services.obtainProducts(page, limit)
    return result
      ? (
          res.status(200).json({
            result
          })
        )
      : (
          res.status(401).json({ message: 'Error al obtener los productos' })
        )
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params
  const services = new ProductService()
  try {
    const product = await services.obtainProduct(id)
    if (product === null) {
      return res.status(404).json({
        message: 'El producto no existe'
      })
    }
    if (product.image && product.image?.public_id) {
      await services.delete(product)
      res.status(200).json({ message: 'Eliminado correctamente ' })
    } else {
      return res.status(400).json({
        message: 'No se puede eliminar el producto sin una imagen válida'
      })
    }
  } catch (err) {
    console.error(err)
    throw new Error('Error al eliminar el producto u/o imagen')
  }
}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const { price, stock } = req.body
  const services = new ProductService()

  try {
    if (!await services.obtainProduct(id)) {
      res.status(401).json({
        message: 'No se encontró ningun producto'
      })
      return
    }

    await services.update(id, price, stock)

    res.status(200).json({
      message: 'Producto actualizado correctamente'
    })
  } catch (err) {
    console.log(err)
  }
}

export const getProductsByFilter = async (req, res) => {
  const category = req.query.category.trim()
  const validate = new ProductValidate()
  const services = new ProductService()
  const page = req.query.page || 1
  const limit = req.query.limit || 10
  try {
    if (!validate.correctCategory(category)) {
      return res.status(404).json({
        message: 'El filtro es incorrecto'
      })
    }

    const products = await services.filter(category, page, limit)
    res.status(200).json({
      products
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}
