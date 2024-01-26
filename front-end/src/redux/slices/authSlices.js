import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullName: '',
  id: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { user } = action.payload
      state.fullName = user.fullName
      state.id = user.id
    },
    logout: (state, action) => initialState
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
