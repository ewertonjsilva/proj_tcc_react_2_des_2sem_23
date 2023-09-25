import React from 'react';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

function CadUsuarios() {
  return (
    <div className='centraliza'>
      <Cabecalho pag={'cadUsu'} />
      Tela de Cadastro Usuarios
      <Rodape />
    </div>
  );
}

export default CadUsuarios;

