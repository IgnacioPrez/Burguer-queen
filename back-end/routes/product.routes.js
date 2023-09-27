import { Router } from 'express'
import fileUpload from 'express-fileupload'
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.js'
import { collectBugs } from '../middleware/collectBugs.js'
import { check } from 'express-validator'

const router = Router()

router.post('/createProduct',
  fileUpload({
    useTempFiles: true,
    tempFileDir: './temp'
  })
  ,
  [
    check('title', 'Debe ingresar un título').not().isEmpty(),
    check('description', 'Debe ingresar una descripción al producto').not().isEmpty(),
    check('price', 'El producto debe tener un precio').isNumeric().not().isEmpty(),
    check('category', 'Debe ingresar una categoría para el producto').not().isEmpty(),

    collectBugs
  ]
  , createProduct)

router.get('/', getProducts)

router.delete('/delete-product/:id', deleteProduct)

router.put('/update-product/:id', updateProduct)

export default router
