import React from 'react';

import './cardProduto.css';

function CardProduto({ produto }) {
  return (
    <div className='cardProd'>
      <div className='controlImgProd'>
        <img src={produto.prd_img} alt={produto.prd_nome} />
      </div>
      <span className='descricao'>{produto.prd_nome}</span>
      <span>{produto.prd_valor}</span>
    </div>
  );
}

export default CardProduto;

