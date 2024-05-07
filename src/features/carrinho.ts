import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootReducer } from '../store'
import { Produto as ProdutoType } from '../App'

type tipagemCarrinho = {
  produtosAVenda: ProdutoType[]
  favoritos: number[]
}

const initialState: tipagemCarrinho = {
  produtosAVenda: [],
  favoritos: []
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<ProdutoType>) => {
      if (state.produtosAVenda.find((item) => item.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        state.produtosAVenda = [...state.produtosAVenda, action.payload]
      }
    },
    adicionarAoFavorito: (state, action: PayloadAction<number>) => {
      if (state.favoritos.includes(action.payload)) {
        alert('Item já adicionado')
      } else {
        state.favoritos = [...state.favoritos, action.payload]
      }
    }
  }
})

export const selectProductinCart = (itemsToBuy: ProdutoType[]) =>
  itemsToBuy.length

export const selectTotalValue = (itemsToBuy: ProdutoType[]) =>
  itemsToBuy.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

export const estaNosFavoritos = (favorites: number[], id: number) =>
  favorites.some((pid) => pid === id)

export const selectIsInCart = (products: ProdutoType[], id: number) =>
  products.some((p) => p.id === id)

export const selectFavouritesQtt = (favorites: number[]) => favorites.length

export const { adicionarAoCarrinho, adicionarAoFavorito } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer
