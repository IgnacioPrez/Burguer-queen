import { Product } from '../model/product.model.js'
import { deleteImage, uploadImage } from '../helpers/cloudinary.js'
import fs from 'fs-extra'
import { CATEGORIES } from '../helpers/constants.js'

export const createProduct = async (req, res) => {
  const productsData = req.body
  const existPathImage = req.files.image

  try {
    if (!existPathImage) {
      res.status(400).json({
        message: 'El archivo no contiene una imagen'
      })
      return
    }

    if (!CATEGORIES.filter((el) => el === productsData.category)) {
      res.status(401).json({ message: 'El producto no cuenta con una categoría válida' })
      return
    }
    const products = new Product(productsData)
    const productFound = await Product.findOne({ title: products.title })

    if (productFound) return res.status(400).json({ message: 'El producto ya existe' })

    if (existPathImage) {
      const result = await uploadImage(existPathImage.tempFilePath)
      products.image = {
        public_id: result.public_id,
        url: result.secure_url
      }
      await fs.unlink(existPathImage.tempFilePath)
    }

    await products.save()
    res.json({
      products
    })
  } catch (err) {
    throw new Error(`Ocurrio un error al crear el producto: --> ${err}`)
  }
}

export const getProducts = async (req, res) => {
  const products = await Product.find()
  if (!products) return res.status(400).json({ message: 'Error al obtener los productos' })
  res.json({
    products
  })
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findByIdAndDelete({ _id: id })
    if (!product) {
      res.status(401).json({
        message: 'El producto no existe'
      })
      return
    }
    if (product.image?.public_id) {
      deleteImage(product.image.public_id)
      res.status(200).json({
        message: 'Eliminado correctamente'
      })
    }
  } catch (err) {
    console.log(`Error al eliminar el producto u/o imagen: --> ${err}`)
  }
}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const { price, stock } = req.body

  try {
    const productFound = await Product.findOne({ _id: id })
    if (!productFound) {
      res.status(401).json({
        message: 'No se encontró ningun producto'
      })
      return
    }

    await Product.findOneAndUpdate(
      { _id: id },
      {
        price,
        stock,
        updateAt: Date.now()
      },
      {
        new: true
      }
    )
    res.status(200).json({
      message: 'Product actualizado correctamente'
    })
  } catch (err) {
    console.log(err)
  }
}

export const getProductsByFilter = async (req, res) => {
  const category = req.query.category.trim()
  console.log(category)
  try {
    const filterFound = !CATEGORIES.includes(category)

    if (filterFound) {
      return res.status(401).json({
        message: 'El filtro es incorrecto'
      })
    }

    const products = await Product.find({ category })
    res.status(200).json({
      products
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}
