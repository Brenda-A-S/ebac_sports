import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoItem = Produto

interface CarrinhoState {
  itens: CarrinhoItem[]
}

const initialState: CarrinhoState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar(state, action: PayloadAction<CarrinhoItem>) {
      state.itens.push(action.payload)
    },
    remover(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    }
  }
})

export const { adicionar, remover } = cartSlice.actions
export default cartSlice.reducer
