import { deleteImage, uploadImage } from '../../helpers/cloudinary.js'
import { CATEGORIES } from '../../helpers/constants.js'
import { Product } from '../model/product.model.js'
import fs from 'fs-extra'

export class ProductService {
  async createProductInDB (data, existPathImage) {
    const product = new Product(data)
    const result = await uploadImage(existPathImage.tempFilePath)
    product.image = {
      public_id: result.public_id,
      url: result.secure_url
    }
    await fs.unlink(existPathImage.tempFilePath)
    return product
  }

  async obtainProducts (page, limit) {
    const options = {
      page,
      limit
    }
    const result = await Product.paginate({}, options)
    return result
  }

  async obtainProduct (id) {
    return await Product.findOne({ _id: id })
  }

  async delete (data) {
    await deleteImage(data.image.public_id)
    await Product.findOneAndDelete(data._id)
  }

  async update (id, price, stock) {
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
  }

  async filter (category) {
    return await Product.find({ category })
  }
}

export class ProductValidate {
  correctCategory (data) {
    return typeof data === 'string'
      ? (
          CATEGORIES.includes(data)
        )
      : (
          CATEGORIES.filter((el) => el === data.category)
        )
  }

  async existsProduct (data) {
    return await Product.findOne({ title: data.title })
  }
}
