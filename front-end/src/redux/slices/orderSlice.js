import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateList: (state, action) => {
      const orders = action.payload
      console.log(orders.length, state.length)

      if (orders.length < state.length) {
        const newOrders = state.filter(
          producto => orders.some(order => order._id === producto._id)
        )

        return newOrders
      }

      if (orders.length > state.length) {
        const newOrders = orders.filter(
          otherOrder => !state.some(producto => producto._id === otherOrder._id)
        )
        const updateOrders = [...state, ...newOrders]
        return updateOrders
      }

      return state
    },

    moreMin: (state, action) => {
      const { time, id } = action.payload
      console.log(time, id)
      const coincidence = state.find((order) => order._id === id)
      if (coincidence.min === 15) return
      if (coincidence) {
        coincidence.min += time
      }
    }
  }

})

export const { updateList, moreMin } = orderSlice.actions

export default orderSlice.reducer
