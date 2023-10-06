import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";

import './carrinho.css';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

import imgTemp from '../../../imagens/temp/macarrao.jpg';

function Carrinho() {

  const location = useLocation();

  const [produtosCarrinho, setProdutosCarrinho] = useState(location.state);

  useEffect(() => {
    setProdutosCarrinho(location.state);
  }, []);

  let produtos = location.state;
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
            <img src={produtosCarrinho[0].prd_img} alt={produtosCarrinho[0].prd_nome} />
          </div>
          <span>{produtosCarrinho[0].prd_nome}</span>
          <RiDeleteBin6Line />
        </div>
        <div className='carrProduto carrQtd'><RiSubtractLine />{produtosCarrinho[0].quantidade}<RiAddLine /></div>
        <div className='carrProduto valores'>{produtosCarrinho[0].prd_valor}</div>
        <div className='carrProduto valores'>R$ {(produtosCarrinho[0].quantidade * produtosCarrinho[0].prd_valor).toFixed(2)}</div>
      </div>

      <div className='grid'>
        <div className='carrProduto'>
          <div className='contImgCarrProd'>
            <img src={produtosCarrinho[1].prd_img} alt={produtosCarrinho[1].prd_nome} />
          </div>
          <span>{produtosCarrinho[1].prd_nome}</span>
          <RiDeleteBin6Line />
        </div>
        <div className='carrProduto carrQtd'><RiSubtractLine />{produtosCarrinho[1].quantidade}<RiAddLine /></div>
        <div className='carrProduto valores'>{produtosCarrinho[1].prd_valor}</div>
        <div className='carrProduto valores'>R$ {(produtosCarrinho[1].quantidade * produtosCarrinho[1].prd_valor).toFixed(2)}</div>
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

