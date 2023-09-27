import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { MdLunchDining, MdLocalBar, MdDining, MdIcecream, MdFastfood } from 'react-icons/md';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

import promo1 from '../../../imagens/promo1.png';
import promo2 from '../../../imagens/promo2.png';
import promo3 from '../../../imagens/promo3.png';
import promo4 from '../../../imagens/promo4.png';

import local from '../../../imagens/local.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';

function Home() {
  return (
    <div className='centraliza'>
      <Cabecalho pag={'home'} />

      <Slider />

      <main className="principal">
        <div className='tamImgLocal'>
          <img className="imagemLocal" src={local} alt="Imagem do local" />
        </div>
        <div>
          <h3>Lanchonete BomBurguer onde Sabor e Conveniência Se Encontram</h3>
          <p>Na Lanchonete Sabor & Prazer, estamos comprometidos em satisfazer seus desejos gastronômicos de todas as formas possíveis. Se você está procurando uma refeição deliciosa para desfrutar no conforto da sua casa, ou se deseja um ambiente aconchegante para saborear nossos pratos frescos e suculentos, você está no lugar certo!</p>
        </div>
      </main>

      <div class="tipos">
        <MdLunchDining className="tpicon" />
        <MdLocalBar className="tpicon" />
        <MdDining className="tpicon" />
        <MdIcecream className="tpicon" />
        <MdFastfood className="tpicon" />
      </div>

      <Rodape />
    </div>
  );
}

function Slider() {
  return (
    <Carousel
      className="slider"
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
    >
      <div>
        <img src={promo1} alt="promoção 1" />
      </div>
      <div>
        <img src={promo2} alt="promoção 2" />
      </div>
      <div>
        <img src={promo3} alt="promoção 3" />
      </div>
      <div>
        <img src={promo4} alt="promoção 4" />
      </div>
    </Carousel>
  );
}

export default Home;

