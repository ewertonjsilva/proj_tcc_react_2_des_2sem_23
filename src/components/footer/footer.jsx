import React from 'react';

import './footer.css';

function Rodape() {
  return (
    <footer className="rodape">
      <div className="social">
        <img src="./imagens/icones/facebook.svg" alt="facebook" />
        <img src="./imagens/icones/telegram.svg" alt="" />
        <img src="./imagens/icones/whatsapp.svg" alt="" />
        <img src="./imagens/icones/tiktok.svg" alt="" />
      </div>
      <p>Lanches BomNurguer de Cidade ME | 00.000.000/0000-00</p>
      <p>Rua Brasil, 1000 - centro - Parapuã/SP | bbgr@bbuguer.com</p>
    </footer>
  );
}

export default Rodape;
