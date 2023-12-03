import CloseIcon from '@mui/icons-material/Close'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'
import { Details, OrderBody, OrderBought, OrderBtn, OrderInfo, OrderTitle } from './styles'
import { useEffect, useState, memo } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'
import { useDispatch } from 'react-redux'
import { moreMin } from '../../../redux/slices/orderSlice'
const Order = ({ fullName, city, items, totalPrice, streetName, shippingCost, extra, _id, min }) => {
  const dispatch = useDispatch()
  const [openList, setOpenList] = useState(null)
  const open = Boolean(openList)

  const showList = (event) => {
    setOpenList(event.currentTarget)
  }

  const closeListBurguer = () => {
    setOpenList(null)
  }
  const convertPrice = (price) => price.toLocaleString('es-Ar', { style: 'currency', currency: 'ARS' })

  useEffect(() => {
    const values = { time: 1, id: _id }
    const timer = setInterval(() => {
      dispatch(moreMin(values))
      if (min >= 15) {
        clearInterval(timer)
      }
    }, 60000)
    return () => clearInterval(timer)
  }, [min])
  return (
    <OrderBought>
      <OrderBtn>
        <button>
          <CloseIcon />
        </button>
      </OrderBtn>
      <OrderBody>
        <OrderTitle>
          <p>Clienta/e: {fullName}</p>
        </OrderTitle>
        <OrderInfo min={min}>
          <DeliveryDiningIcon />
          <p>
            <span>Destino: {city}</span>
            <span>{streetName}</span>
          </p>
          <Details>
            <Button
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={showList}
              sx={{ gap: '5px' }}
            >
              <SortIcon />
              Pedido
            </Button>
            <Menu
              id='basic-menu'
              anchorEl={openList}
              open={open}
              onClose={closeListBurguer}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
            >
              {items.map((el) => <MenuItem key={crypto.randomUUID()} onClick={closeListBurguer}>{el.title}</MenuItem>)}
            </Menu>
          </Details>
          <p>
            <span>Costos de envio: </span> {convertPrice(shippingCost)}
          </p>
          {extra && <p> <span>Agregados: </span> {extra} </p>}
          <p>
            <span>Total:</span> {convertPrice(totalPrice)}
          </p>
        </OrderInfo>
      </OrderBody>
    </OrderBought>
  )
}

export const MemoizedOrder = memo(Order)
