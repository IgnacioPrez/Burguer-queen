import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  unfiltered: {
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
  },
  withFilters: []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    obtainProducts: (state, action) => {
      const {
        docs,
        hasNextPage,
        hasPrevPage,
        limit,
        nextPage,
        page,
        pagingCounter,
        prevPage,
        totalDocs,
        totalPages
      } = action.payload

      return {
        ...state,
        unfiltered: {
          ...state.unfiltered,
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
    },
    addSearch: (state, action) => {
      const docs = action.payload
      return {
        ...state,
        withFilters: docs
      }
    },
    clearSearch: (state, action) => {
      return {
        ...state,
        withFilters: []
      }
    }
  }

})

export const { obtainProducts, addSearch, clearSearch } = productSlice.actions

export default productSlice.reducer
