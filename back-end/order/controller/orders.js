import { isValidItems } from '../../helpers/validationDB.js'
import { Orders } from '../model/order.model.js'

export const AddProduct = async (req, res) => {
  const { fullName, items, phoneNumber, city, streetName, extra } = req.body

  try {
    const validateProducts = isValidItems(items)
    if (!validateProducts) {
      res.status(401).json({ message: 'Algunos productos no cumplen con los requisitos' })
      return
    }

    // const newTotal = await items.map((el) => el.price).reduce((prev, acc) => prev + acc, 0)
    const order = new Orders({
      fullName,
      items,
      totalPrice: await items.map((el) => el.price).reduce((prev, acc) => prev + acc, 0),
      payment: false,
      phoneNumber,
      streetName,
      city,
      shippingCost: 200,
      extra
    })

    await order.save()

    res.status(200).json({ order })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

export const getPaymentOrders = async (req, res) => {
  try {
    const ordersPay = Orders.find({ isPay: true })
    res.status(200).json(ordersPay)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}
