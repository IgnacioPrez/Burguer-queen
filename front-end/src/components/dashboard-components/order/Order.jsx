import CloseIcon from '@mui/icons-material/Close'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'
import { OrderBody, OrderBought, OrderBtn, OrderInfo, OrderTitle } from './styles'
import { useEffect, useState } from 'react'

const Order = ({ client, destiny, order, total, orderSent }) => {
  const convertPrice = (price) => price.toLocaleString('es-Ar', { style: 'currency', currency: 'ARS' })

  const [min, setMin] = useState(0)
  const [seg, setSeg] = useState(0)
  const [retarded, setRetarded] = useState(false)

  const changeTime = () => {
    setSeg((prevState) => prevState + 1)
  }

  useEffect(() => {
    if (!retarded) {
      const timer = setInterval(() => {
        changeTime()

        if (seg >= 59) {
          setMin((prevMin) => prevMin + 1)
        }

        if (min >= 15) {
          setRetarded(true)
          setSeg(0)
          clearInterval(timer)
        }
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [min, seg])

  return (
    <OrderBought>
      <OrderBtn>
        <button onClick={orderSent}>
          <CloseIcon />
        </button>
      </OrderBtn>
      <OrderBody>
        <OrderTitle>
          <p>Comprador: {client}</p>
        </OrderTitle>
        <OrderInfo min={min} retarded={retarded}>
          <DeliveryDiningIcon />
          <p>
            <span>Destino:</span> {destiny}
          </p>
          <p>
            <span>Orden:</span> {order}
          </p>
          <p>
            <span>Total:</span> {convertPrice(total)}
          </p>
        </OrderInfo>
      </OrderBody>
    </OrderBought>
  )
}

export default Order
