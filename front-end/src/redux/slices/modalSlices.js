import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  id: '',
  typeModal: ''
}

const modalSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { open, id, type } = action.payload
      state.open = open
      state.id = id
      state.typeModal = type
    },
    closeModal: (state, action) => initialState
  }
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
