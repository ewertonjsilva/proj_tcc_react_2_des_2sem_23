import React from 'react';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

function Contato() {
  return (
    <div className='centraliza'>
      <Cabecalho pag={'contato'} />
      Tela de Contato
      <Rodape />
    </div>
  );
}

export default Contato;

