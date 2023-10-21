import { createSlice } from '@reduxjs/toolkit';

import prod1 from '../../imagens/temp/hamburger-bacon.jpg';
import prod2 from '../../imagens/temp/hamburger-batata.jpg';
import prod3 from '../../imagens/temp/lanche1.jpg';
import prod4 from '../../imagens/temp/suco-laranja.jpg';
import prod5 from '../../imagens/temp/suco2.jpg';
import prod6 from '../../imagens/temp/sorvete.jpg';

import ic_lanche from '../../imagens/icones/lanche.svg';
import ic_combo from '../../imagens/icones/todos.svg';
import ic_bebida from '../../imagens/icones/suco.svg';
import ic_sobremesa from '../../imagens/icones/icecream.svg';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    carrinho: [
      {
        prd_id: 1,
        prd_nome: 'Hamburguer de Bacon',
        prd_img: prod1,
        prd_valor: '21.00',
        prd_descricao: 'Lanche maravilhoso',
        prd_unidade: 'un.',
        img_tp_prod: ic_lanche,
        quantidade: 1
      },
      {
        prd_id: 2,
        prd_nome: 'Combo hamburguer e batata',
        prd_img: prod2,
        prd_valor: '33.00',
        prd_descricao: 'Muito delicioso',
        prd_unidade: 'un.',
        img_tp_prod: ic_combo,
        quantidade: 2
      },
    ],
  },
  reducers: {
    increment: (state, obj) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.carrinho.push(obj);
    },
    decrement: (state) => {
      state.carrinho = [];
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
