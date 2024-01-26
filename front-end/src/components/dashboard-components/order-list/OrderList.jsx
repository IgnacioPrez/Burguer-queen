import { ListOrderContainer, OrderContainer } from './style'
import { useSelector } from 'react-redux'
import { NewOrder } from '../order/Order'

const OrderList = () => {
  const orders = useSelector((store) => store.order)
  return (
    <OrderContainer>
      <ListOrderContainer>
        {orders.length > 0 && orders.map((product) => {
          return <NewOrder key={product._id} {...product} />
        })}
      </ListOrderContainer>
    </OrderContainer>
  )
}

export default OrderList
