import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../../redux/reducers/carrinho';

import './carrinho.css';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';
import Produto from '../produtos/produto';
import ItemCarrinho from './itemCarrinho';

function Carrinho() {

  // const [carrinho, setCarrinho] = useState(
  //   [
  //     {
  //       prd_id: 1,
  //       prd_nome: 'Hamburguer de Bacon',
  //       prd_img: prod1,
  //       prd_valor: '21.00',
  //       prd_descricao: 'Lanche maravilhoso',
  //       prd_unidade: 'un.',
  //       img_tp_prod: ic_lanche,
  //       quantidade: 1
  //     },
  //     {
  //       prd_id: 2,
  //       prd_nome: 'Combo hamburguer e batata',
  //       prd_img: prod2,
  //       prd_valor: '33.00',
  //       prd_descricao: 'Muito delicioso',
  //       prd_unidade: 'un.',
  //       img_tp_prod: ic_combo,
  //       quantidade: 2
  //     },
  //   ]
  // );

  const count = useSelector((state) => state.counter.carrinho);
  // const dispatch = useDispatch();
  const [carrinho, setCarrinho] = useState(count);
  let valor = 0.00;
  let valorTotal = 0.00;
  let produtos = carrinho;
  console.log(carrinho);
  if (carrinho) {
    // Use a função reduce para somar o valor total
  valorTotal = produtos.reduce((total, produto) => {
    // Converta o campo prd_valor para um número (removendo o símbolo de moeda, se houver)
    valor = parseFloat(produto.prd_valor.replace('$', '').replace(',', '.'));

    // Multiplique a quantidade pelo valor e adicione ao total
    return total + produto.quantidade * valor;
  }, 0);
  }
  


  return (
    <div className='centraliza'>

      <Cabecalho pag={'carrinho'} />

      <div className='grid'>
        <div className='carrTitulo'>Produto</div>
        <div className='carrTitulo'>Quantidade</div>
        <div className='carrTitulo'>Valor</div>
        <div className='carrTitulo'>Total</div>
      </div>

      {
        carrinho.map(
          prd => {
            return <ItemCarrinho item={prd} key={prd.prd_id} />
          }
        )
      }

      <div className='gridTotal'>
        <div></div>
        <div className='total'>R$ {valorTotal.toFixed(2)}</div>
      </div>

      <Rodape />
    </div>
  );
}

// function ContainerCarrinho({ tela, produtos }) {

//   const location = useLocation();

//   const [telaCrr, setTelaCrr] = useState(location.state.tela || tela);

//   const [carrinho, setCarrinho] = useState(
//     [
//       {
//         prd_id: 1,
//         prd_nome: 'Hamburguer de Bacon',
//         prd_img: prod1,
//         prd_valor: '21.00',
//         prd_descricao: 'Lanche maravilhoso',
//         prd_unidade: 'un.',
//         img_tp_prod: ic_lanche,
//         quantidade: 1
//       },
//       {
//         prd_id: 2,
//         prd_nome: 'Combo hamburguer e batata',
//         prd_img: prod2,
//         prd_valor: '33.00',
//         prd_descricao: 'Muito delicioso',
//         prd_unidade: 'un.',
//         img_tp_prod: ic_combo,
//         quantidade: 2
//       },
//     ]);

//   const prodSel = location.state.produto;

//   // function alteraTela(tl) {
//   //   setTelaCrr(tl);
//   // }

//   return (
//     <>

//       {
//         telaCrr === 'produto' && (
//           <Produto produto={prodSel} alteraTela={alteraTela} carrinho={carrinho} addCarrinho={addCarrinho} />
//         )
//       }

//       {
//         telaCrr === 'carrinho' && (
//           <Carrinho produto={prodSel} alteraTela={alteraTela} carrinho={carrinho} />
//         )
//       }

//     </>
//   );
// }

export default Carrinho;

