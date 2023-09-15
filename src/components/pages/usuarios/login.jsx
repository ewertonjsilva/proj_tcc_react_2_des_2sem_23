import React from 'react';

import Header from '../../header/header';
import Rodape from '../../footer/footer';

function Login() {
  return (
    <div>
      <Header pag={'login'} />
      <p
        style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
      >
        Tela de Login
      </p>
      <Rodape />
    </div>
  );
}

export default Login;

