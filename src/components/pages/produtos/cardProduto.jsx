import React from 'react';
import { useNavigate } from 'react-router-dom';

import './cardProduto.css';

function CardProduto({ produto, carrinho, addItCarr }) {

  let navigate = useNavigate();

  function visualizaProd() {
    navigate('/produto', { state: {produto, carrinho} });
  }

  return (
    <div className='cardProd' onClick={() => visualizaProd()}>
      <div className='controlImgProd'>
        <img src={produto.prd_img} alt={produto.prd_nome} />
      </div>
      <span className='descricao'>{produto.prd_nome}</span>
      <span>{produto.prd_valor}</span>
    </div>
  );
}

export default CardProduto;

