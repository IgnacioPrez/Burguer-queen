import { ListOrderContainer, OrderContainer } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../../redux/slices/productSlice'
import { Order } from '../order/'

const OrderList = () => {
  const products = useSelector((store) => store.product)
  const dispatch = useDispatch()

  const orderSent = (id) => {
    dispatch(deleteProduct(id))
  }

  return (
    <OrderContainer>

      <ListOrderContainer>
        {products.map((product) => {
          return <Order key={product.id} {...product} orderSent={() => orderSent(product.id)} />
        })}
      </ListOrderContainer>
    </OrderContainer>
  )
}

export default OrderList
