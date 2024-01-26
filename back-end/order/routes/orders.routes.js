import { Router } from 'express'
import { collectBugs } from '../../middleware/collectBugs.js'
import { AddProduct, getPaymentOrders } from '../controller/orders.js'
import { check } from 'express-validator'
import { validateProductIds } from '../../middleware/validateProductIds.js'
import { validateJWT } from '../../middleware/validateJWT.js'

const router = Router()

router.post('/create-order', [
  check('fullName', 'Es necesario el nombre del cliente').not().isEmpty(),
  check('streetName', 'Es necesario una dirección del cliente').not().isEmpty(),
  check('phoneNumber', 'Se requiere un contacto del cliente').not().isEmpty(),
  check('city', 'Es necesario especificar la ciudad del cliente').not().isEmpty(),
  check('items', 'Se requieren productos para generar una orden').not().isEmpty(),
  validateProductIds,
  collectBugs
], AddProduct)

router.get('/', [
  validateJWT,
  collectBugs
], getPaymentOrders)

export default router
