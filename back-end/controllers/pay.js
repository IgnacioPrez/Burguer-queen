import { Orders } from '../model/order.model.js'
import mercadopago from 'mercadopago'
import { config } from 'dotenv'
import { PORT } from '../helpers/constants.js'
import { Payment } from '../model/payment.model.js'

config()

export const payProducts = async (req, res) => {
  const { orderId } = req.params
  try {
    const order = await Orders.findOne({ _id: orderId })
    if (!order) {
      res.status(401).json({ message: 'No existe ninguna orden efectuada por este usuario' })
      return
    }

    mercadopago.configure({
      access_token: process.env.ACCESSS_TOKEN_MP
    })

    const data = await mercadopago.preferences.create({
      items: order.items.map(({ title, quantity, price, productId }) => ({
        title,
        quantity,
        currency_id: 'ARS',
        unit_price: price,
        id: productId
      })),
      payer: {
        phone: {
          area_code: '+54',
          number: order.phoneNumber
        },
        name: order.fullName,
        address: {
          street_name: order.streetName,
          street_number: order.streetNumber && order.streetNumber
        },
        date_created: Date.now()
      },
      back_urls: {
        success: `http://localhost:${PORT}/payment/succes`,
        failure: `http://localhost:${PORT}/payment/failure`,
        pending: `http://localhost:${PORT}/payment/pending`
      },
      notification_url: `https://98ac-181-117-24-61.ngrok.io/payment/webhook/${orderId}`
    })

    res.status(200).json(data.body)
  } catch (err) {
    console.err(err)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const receiveWebhook = async (req, res) => {
  const payment = req.query
  const { orderId } = req.params
  try {
    const data = await mercadopago.payment.findById(payment['data.id'])
    const order = await Orders.findOne({ _id: orderId, isPay: false })
    if (payment.type === 'payment') {
      const pay = new Payment({
        statusPaid: true,
        createdAt: Date.now(),
        ordersId: order._id,
        paymentData: data
      })
      await pay.save()
      await Orders.findOneAndUpdate({ _id: orderId, isPay: false }, { isPay: true }, { new: true })
      res.status(200).json({
        message: 'Su compra se concreto correctamente'
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Error en el servidor'
    })
  }
}
