import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoSlice = {
  itens: Produto[]
}

const initialState: CarrinhoSlice = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'Carrinho de Compras',
  initialState,
  reducers: {
    addItemCar: (state, action: PayloadAction<Produto>) => {
      const novoItem = action.payload

      if (state.itens.find((p) => p.id === novoItem.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(novoItem)
      }
    }
  }
})

export const { addItemCar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
