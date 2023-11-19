import { Order } from '../model/order.model.js'
export class OrderService {
  createOrder (orderData) {
    const { fullName, items, phoneNumber, streetName, city, extra } = orderData
    const order = new Order({
      fullName,
      items,
      totalPrice: items.map((el) => el.price).reduce((prev, acc) => prev + acc, 0),
      payment: false,
      phoneNumber,
      streetName,
      city,
      shippingCost: 200,
      extra
    })
    return order
  }

  async obtainOrders () {
    return await Order.find({ isPay: true })
  }
}

export class OrderValidate {
  validateItems (arr) {
    return arr.some(
      (element) =>
        element._id && element.title && element.price && element.quantity
    )
  }
}
