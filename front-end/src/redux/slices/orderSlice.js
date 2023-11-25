import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    client: 'cliente1',
    destiny: 'destino 1',
    order: '1 bajón, papas cheddar',
    total: 3600
  },
  {
    id: 2,
    client: 'cliente2',
    destiny: 'destino 1',
    order: '1 bajón, 1 gaseosa fanta, papas cheddar',
    total: 5000
  },
  {
    id: 3,
    client: 'cliente3',
    destiny: 'destino 1',
    order: '1 gaseosa fanta, papas cheddar',
    total: 2800
  }
]

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload)
    }
  }
})

export const { deleteProduct } = orderSlice.actions

export default orderSlice.reducer
