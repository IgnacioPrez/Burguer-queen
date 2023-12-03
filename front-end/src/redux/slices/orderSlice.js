import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allOrders: []
}
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateList: (state, action) => {
      const orders = action.payload
      const founded = state.allOrders.find((el) => el._id === orders._id)
      if (founded) return
      return {
        ...state,
        allOrders: orders
      }
    },
    moreMin: (state, action) => {
      const { time, id } = action.payload
      console.log(time, id)
      const coincidence = state.allOrders.find((order) => order._id === id)
      if (coincidence.min === 15) return
      if (coincidence) {
        coincidence.min += time
      }
    }
  }

})

export const { updateList, moreMin } = orderSlice.actions

export default orderSlice.reducer
