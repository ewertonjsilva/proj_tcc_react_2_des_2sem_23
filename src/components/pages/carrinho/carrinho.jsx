import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";

import './carrinho.css';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

import prod1 from '../../../imagens/temp/hamburger-bacon.jpg';
import prod2 from '../../../imagens/temp/hamburger-batata.jpg';
import prod3 from '../../../imagens/temp/lanche1.jpg';
import prod4 from '../../../imagens/temp/suco-laranja.jpg';
import prod5 from '../../../imagens/temp/suco2.jpg';
import prod6 from '../../../imagens/temp/sorvete.jpg';

import ic_lanche from '../../../imagens/icones/lanche.svg';
import ic_combo from '../../../imagens/icones/todos.svg';
import ic_bebida from '../../../imagens/icones/suco.svg';
import ic_sobremesa from '../../../imagens/icones/icecream.svg';

function Carrinho() {

  const location = useLocation();

  const [carrinho, setCarrinho] = useState(
    [
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
    ]);

  let produtos = carrinho;
  // Use a função reduce para somar o valor total
  const valorTotal = produtos.reduce((total, produto) => {
    // Converta o campo prd_valor para um número (removendo o símbolo de moeda, se houver)
    const valor = parseFloat(produto.prd_valor.replace('$', '').replace(',', '.'));

    // Multiplique a quantidade pelo valor e adicione ao total
    return total + produto.quantidade * valor;
  }, 0);

  return (
    <div className='centraliza'>
      <Cabecalho pag={'carrinho'} />

      <div className='grid'>
        <div className='carrTitulo'>Produto</div>
        <div className='carrTitulo'>Quantidade</div>
        <div className='carrTitulo'>Valor</div>
        <div className='carrTitulo'>Total</div>
      </div>

      <div className='grid'>
        <div className='carrProduto'>
          <div className='contImgCarrProd'>
            <img src={carrinho[0].prd_img} alt={carrinho[0].prd_nome} />
          </div>
          <span>{carrinho[0].prd_nome}</span>
          <RiDeleteBin6Line />
        </div>
        <div className='carrProduto carrQtd'><RiSubtractLine />{carrinho[0].quantidade}<RiAddLine /></div>
        <div className='carrProduto valores'>{carrinho[0].prd_valor}</div>
        <div className='carrProduto valores'>R$ {(carrinho[0].quantidade * carrinho[0].prd_valor).toFixed(2)}</div>
      </div>

      <div className='grid'>
        <div className='carrProduto'>
          <div className='contImgCarrProd'>
            <img src={carrinho[1].prd_img} alt={carrinho[1].prd_nome} />
          </div>
          <span>{carrinho[1].prd_nome}</span>
          <RiDeleteBin6Line />
        </div>
        <div className='carrProduto carrQtd'><RiSubtractLine />{carrinho[1].quantidade}<RiAddLine /></div>
        <div className='carrProduto valores'>{carrinho[1].prd_valor}</div>
        <div className='carrProduto valores'>R$ {(carrinho[1].quantidade * carrinho[1].prd_valor).toFixed(2)}</div>
      </div>

      <div className='gridTotal'>
        <div></div>
        <div className='total'>R$ {valorTotal.toFixed(2)}</div>
      </div>

      <Rodape />
    </div>
  );
}

export default Carrinho;

