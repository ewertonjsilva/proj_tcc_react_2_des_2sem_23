import React from 'react';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

function Login() {

  return (
    <div className='centraliza'>
      <Cabecalho pag={'login'} />
      Tela de login
      <Rodape />
    </div>
  );
}

export default Login;

