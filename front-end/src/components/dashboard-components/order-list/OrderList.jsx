import { ListOrderContainer, OrderContainer } from './style'
import { useSelector } from 'react-redux'
import { MemoizedOrder } from '../order/Order'

const OrderList = () => {
  const orders = useSelector((store) => store.order)
  return (
    <OrderContainer>

      <ListOrderContainer>
        {orders.allOrders && orders.allOrders.map((product) => {
          return <MemoizedOrder key={product._id} {...product} />
        })}
      </ListOrderContainer>
    </OrderContainer>
  )
}

export default OrderList
