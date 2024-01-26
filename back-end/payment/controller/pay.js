import { PaymentService, PaymentValidate } from '../service/payment.service.js'

export const payProducts = async (req, res) => {
  const { orderId } = req.params
  const service = new PaymentService()
  const validate = new PaymentValidate()
  try {
    const orderFound = await validate.foundOrder(orderId)
    if (!orderFound) {
      return res.status(401).json({ message: 'No existe ninguna orden efectuada por este usuario' })
    }
    const data = await service.createMpConfig(orderFound, orderId)
    res.status(200).json(data.body)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const receiveWebhook = async (req, res) => {
  const payment = req.query
  const { orderId } = req.params
  const service = new PaymentService()
  const validate = new PaymentValidate()

  try {
    if (payment.type === 'payment') {
      const data = await service.foundDataMP(payment)
      const unpaidOrder = await validate.foundOrder(orderId)
      if (unpaidOrder) {
        await Promise.all([service.createPayInDB(data, unpaidOrder), service.updateOrder(orderId)])
        return res.status(200).json({
          message: 'Su compra se concreto correctamente'
        })
      }
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Error en el servidor'
    })
  }
}
