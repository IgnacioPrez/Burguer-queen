import { OrderService, OrderValidate } from '../service/order.service.js'

export const AddProduct = async (req, res) => {
  const orderData = req.body
  const validate = new OrderValidate()
  const services = new OrderService()
  try {
    const validateProducts = validate.validateItems(orderData.items)
    if (!validateProducts) {
      res.status(401).json({ message: 'Algunos productos no cumplen con los requisitos' })
      return
    }
    const order = services.createOrder(orderData)
    await order.save()

    res.status(200).json({ order })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const getPaymentOrders = async (req, res) => {
  const services = new OrderService()
  try {
    const orders = await services.obtainOrders()
    return orders
      ? (
          res.status(200).json({ orders })

        )
      : res.status(404).json({ message: 'No se efectuó ninguna compra' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}
