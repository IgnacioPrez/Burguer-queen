import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName: '',
  token: '',
  fullName: '',
  id: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { userName, refreshToken, fullName, _id } = action.payload
      state.userName = userName
      state.token = refreshToken
      state.fullName = fullName
      state.id = _id
    },
    logout: (state, action) => initialState
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
