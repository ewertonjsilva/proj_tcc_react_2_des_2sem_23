import React from 'react';

import Header from '../../header/header';
import Rodape from '../../footer/footer';

function Produtos() {
  return (
    <div>
      <Header pag={'produtos'} />
      <p
        style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
      >
        Listagem de produtos
      </p>
      <Rodape />
    </div>
  );
}

export default Produtos;

