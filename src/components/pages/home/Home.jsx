import React from 'react';

import Header from '../../header/header';
import Rodape from '../../footer/footer';

function Home() {
  return (
    <div>
      <Header pag={'home'} />
      <p
        style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
      >
        Home do site
      </p>
      <Rodape />
    </div>
  );
}

export default Home;

