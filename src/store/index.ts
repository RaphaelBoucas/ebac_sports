import { configureStore } from '@reduxjs/toolkit'

import carrinhoSlice from './reducers/carrinho'
import favoritoSlice from './reducers/favorito'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    favoritoSlice: favoritoSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
