import React from 'react';

import Header from '../../header/header';
import Rodape from '../../footer/footer';

function CadUsu() {
  return (
    <div>
      <Header pag={'cadUsu'} />
      <p
        style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
      >
        Cadastro de usuário
      </p>
      <Rodape />
    </div>
  );
}

export default CadUsu;
