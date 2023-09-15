import React from 'react';

import Header from '../../header/header';
import Rodape from '../../footer/footer';

function Contato() {
  return (
    <div>
      <Header pag={'contato'} />
      <p
        style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
      >
        Tela de contato
      </p>
      <Rodape />
    </div>
  );
}

export default Contato;

