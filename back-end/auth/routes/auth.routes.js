import { Router } from 'express'
import { login, logout, profile, register, verifyUser } from '../controllers/auth.js'
import { check } from 'express-validator'
import { collectBugs } from '../../middleware/collectBugs.js'
import { existEmail } from '../../middleware/validationEmail.js'

const router = Router()

router.post(
  '/register',
  [
    check('userName', 'El nombre de usuario es requerido').not().isEmpty(),
    check('fullName', 'Se requiere el nombre completo del usuario').not().isEmpty(),
    check('email', 'El correo es obligatorio').not().isEmpty().isEmail(),
    check('password', 'La contraseña es requerida').not().isEmpty(),
    check('dni', 'El dni es obligatorio').not().isEmpty(),
    check('email').custom(existEmail),
    collectBugs
  ],
  register
)

router.post(
  '/login',
  [
    check('userName', 'El correo es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es requerida').not().isEmpty(),
    collectBugs
  ],
  login
)

router.get('/profile', profile)

router.put('/verify', [
  check('email', 'El correo es obligatorio').not().isEmpty().isEmail(),
  check('code', 'El código de verificación es requerido').not().isEmpty(),
  collectBugs
], verifyUser)

router.get('/logout', logout)
export default router
