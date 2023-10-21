import React from 'react';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

import './contato.css';

function Contato() {
  return (
    <div className='app'>
      <Cabecalho pag={'contato'} />
      <div className='grid-principal'>
        <div className='grid-menu'>
          <h1>A</h1>
          <h1>B</h1>
          <h1>C</h1>
          <h1>D</h1>
        </div>
        <div className='grid-pagina'>
          <div ></div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default Contato;

