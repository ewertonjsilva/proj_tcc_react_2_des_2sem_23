import React from 'react';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

function Produtos() {
  return (
    <div className='centraliza'>
      <Cabecalho pag={'produtos'} />
      Tela de Produtos
      <Rodape />
    </div>
  );
}

export default Produtos;

