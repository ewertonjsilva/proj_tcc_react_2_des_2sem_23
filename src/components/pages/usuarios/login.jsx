import React from 'react';
import { useLocation } from 'react-router-dom';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

function Login() {

  const location = useLocation();

  let carrinho = location.state;

  return (
    <div className='centraliza'>
      <Cabecalho pag={'login'} carrinho={carrinho} />
      Tela de login
      <Rodape />
    </div>
  );
}

export default Login;

