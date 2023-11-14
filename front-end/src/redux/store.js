import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlices'
import modalReducer from './slices/modalSlices'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'
import productReducer from './slices/productSlice'

const reducers = combineReducers({
  user: authReducer,
  modal: modalReducer,
  product: productReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    })
})

export const persistor = persistStore(store)
