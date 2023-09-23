import React from 'react';

import './footer.css';

import face from '../../imagens/icones/facebook.svg';
import tele from '../../imagens/icones/telegram.svg';
import whats from '../../imagens/icones/whatsapp.svg';
import tik from '../../imagens/icones/tiktok.svg';

function Rodape() {
  return (
    <footer className="rodape">
      <div className="social">
        <img src={face} alt="icon_facebook" />
        <img src={tele} alt="icon_telegram" />
        <img src={whats} alt="icon_whatsapp" />
        <img src={tik} alt="icon_tiktok" />
      </div>
      <p>Lanches BomNurguer de Cidade ME | 00.000.000/0000-00</p>
      <p>Rua Brasil, 1000 - centro - Parapuã/SP | bbgr@bbuguer.com</p>
    </footer>
  );
}

export default Rodape;

