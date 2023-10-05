import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";

import './carrinho.css';

function Carrinho() {
  const location = useLocation();

  const [produtosCarrinho, setProdutosCarrinho] = useState({});

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

  console.log(location.state);
  return (
    <div className='centraliza'>
      <div className='grid'>
        <div className='carrTitulo'>Produto</div>
        <div className='carrTitulo'>Quantidade</div>
        <div className='carrTitulo'>Valor</div>
        <div className='carrTitulo'>Total</div>
      </div>
      <div className='grid'>
        <div className='carrProduto'>
          <div className='contImgCarrProd'>
            <img src={location.state[0].prd_img} alt={location.state[0].prd_img} />
          </div>
          <span>{location.state[0].prd_nome}</span>
          <RiDeleteBin6Line />
        </div>
        <div className='carrProduto carrQtd'><RiSubtractLine />{location.state[0].quantidade}<RiAddLine /></div>
        <div className='carrProduto valores'>{location.state[0].prd_valor}</div>
        <div className='carrProduto valores'>R$ {(location.state[0].quantidade * location.state[0].prd_valor).toFixed(2)}</div>
      </div>
      <div className='grid'>
        <div className='carrProduto'>
          <div className='contImgCarrProd'>
            <img src={location.state[1].prd_img} alt={location.state[1].prd_img} />
          </div>
          <span>{location.state[1].prd_nome}</span>
          <RiDeleteBin6Line />
        </div>
        <div className='carrProduto carrQtd'><RiSubtractLine />{location.state[1].quantidade}<RiAddLine /></div>
        <div className='carrProduto valores'>{location.state[1].prd_valor}</div>
        <div className='carrProduto valores'>R$ {(location.state[1].quantidade * location.state[1].prd_valor).toFixed(2)}</div>
      </div>
      <div className='gridTotal'>
        <div></div>
        <div className='total'>R$ {valorTotal.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default Carrinho;
