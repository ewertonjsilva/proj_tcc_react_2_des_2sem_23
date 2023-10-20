import React from 'react';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

import './contato.css';

function Contato() {
  return (
    <div className='centraliza'>
      <Cabecalho pag={'contato'} />
      <div className='grid-principal'>
        <div className='grid-menu'></div>
        <div className='grid-pagina'></div>
      </div>
      <Rodape />
    </div>
  );
}

export default Contato;

