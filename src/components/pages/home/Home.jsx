import React from 'react';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

import './Home.css';

function Home() {
  return (
    <div className='centraliza'>
      <Cabecalho />
      Home do site
      <Rodape />
    </div>
  );
}

export default Home;

