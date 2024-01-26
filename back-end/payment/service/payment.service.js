import mercadopago from 'mercadopago'
import { PORT } from '../../helpers/constants.js'
import { Order } from '../../order/model/order.model.js'
import { Payment } from '../model/payment.model.js'
import { config } from 'dotenv'

config()
export class PaymentService {
  async createMpConfig (order, id) {
    mercadopago.configure({
      access_token: process.env.ACCESSS_TOKEN_MP
    })
    return await mercadopago.preferences.create({
      items: order.items.map(({ title, quantity, price, _id }) => ({
        title,
        quantity,
        currency_id: 'ARS',
        unit_price: price,
        id: _id
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
      notification_url: `https://c711-186-122-88-181.ngrok-free.app/payment/webhook/${id}`
    })
  }

  async foundDataMP (payment) {
    return await mercadopago.payment.findById(payment['data.id'])
  }

  async createPayInDB (data, unpaidOrder) {
    const pay = new Payment({
      statusPaid: true,
      createdAt: Date.now(),
      ordersId: unpaidOrder._id,
      paymentData: data
    })
    await pay.save()
  }

  async updateOrder (orderId) {
    return await Order.findOneAndUpdate({ _id: orderId, isPay: false }, { isPay: true }, { new: true })
  }
}

export class PaymentValidate {
  async foundOrder (orderId) {
    return await Order.findOne({ _id: orderId, isPay: false })
  }
}
