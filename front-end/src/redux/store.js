import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlices'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'

const reducers = combineReducers({
  user: authReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
