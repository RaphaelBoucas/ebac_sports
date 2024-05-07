import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from '../features/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
