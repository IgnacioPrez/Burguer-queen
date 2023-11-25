import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  hasNextPage: null,
  hasPrevPage: null,
  limit: null,
  nextPage: null,
  page: 1,
  pagingCounter: null,
  prevPage: 10,
  totalDocs: null,
  totalPages: 10
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    obtainProducts: (state, action) => {
      const { docs, hasNextPage, hasPrevPage, limit, nextPage, page, pagingCounter, prevPage, totalDocs, totalPages } = action.payload
      return {
        ...state,
        items: docs,
        hasNextPage,
        hasPrevPage,
        limit,
        nextPage,
        page,
        pagingCounter,
        prevPage,
        totalDocs,
        totalPages
      }
    }
  }

})

export const { obtainProducts } = productSlice.actions

export default productSlice.reducer
