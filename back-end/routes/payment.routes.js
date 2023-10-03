import { Router } from 'express'
import { payProducts, receiveWebhook } from '../controllers/pay.js'

const router = Router()

router.post('/pay-products/:orderId', payProducts)

router.get('/succes', (req, res) => res.send('succes'))
router.get('/failure', (req, res) => res.send('failure'))
router.get('/pending', (req, res) => res.send('pending'))

router.post('/webhook/:orderId', receiveWebhook)

export default router
