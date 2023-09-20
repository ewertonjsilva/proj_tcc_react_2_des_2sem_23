import React from 'react';

import './cardProd.css';

function CardProd({produto}) {
  return (
    <div className="cardProd" key={produto.prd_id}>
      <div className="controlImg">
        <img src={produto.prd_img} alt={produto.prd_nome} />
      </div>
      <span className="descricao">{produto.prd_nome}</span>
      <span>R$ {produto.prd_valor}</span>
    </div>
  );
}

export default CardProd;

