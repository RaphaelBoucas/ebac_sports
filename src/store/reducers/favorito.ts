import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoSlice = {
  itens: Produto[]
}

const initialState: FavoritoSlice = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'Favorito',
  initialState,
  reducers: {
    verificarFavorito: (state, action: PayloadAction<Produto>) => {
      const favoritoASerVerificado = action.payload

      const produtoExistente = state.itens.find(
        (p) => p.id === favoritoASerVerificado.id
      )

      if (!produtoExistente) {
        state.itens.push(favoritoASerVerificado)
      } else {
        state.itens = state.itens.filter(
          (p) => p.id !== favoritoASerVerificado.id
        )
      }
    }
  }
})

export const { verificarFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
