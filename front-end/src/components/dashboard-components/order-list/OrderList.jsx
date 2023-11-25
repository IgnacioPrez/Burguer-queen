import { ListOrderContainer, OrderContainer } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { Order } from '../order/'
import { deleteProduct } from '../../../redux/slices/orderSlice'

const OrderList = () => {
  const orders = useSelector((store) => store.order)
  console.log(orders)
  const dispatch = useDispatch()

  const orderSent = (id) => {
    dispatch(deleteProduct(id))
  }

  return (
    <OrderContainer>

      <ListOrderContainer>
        {orders.map((product) => {
          return <Order key={product.id} {...product} orderSent={() => orderSent(product.id)} />
        })}
      </ListOrderContainer>
    </OrderContainer>
  )
}

export default OrderList
