import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { MdLunchDining, MdLocalBar, MdDining, MdIcecream, MdFastfood } from 'react-icons/md';

import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from '../../header/header';
import Rodape from '../../footer/footer';
import CardProd from '../produtos/cardProd';

import promo1 from '../../../imagens/promo1.png';
import promo2 from '../../../imagens/promo2.png';
import promo3 from '../../../imagens/promo3.png';
import promo4 from '../../../imagens/promo4.png';

import local from '../../../imagens/local.jpg';

import prod1 from '../../../imagens/temp/hamburger-bacon.jpg';
import prod2 from '../../../imagens/temp/hamburger-batata.jpg';
import prod3 from '../../../imagens/temp/lanche1.jpg';
import prod4 from '../../../imagens/temp/suco2.jpg';
import prod5 from '../../../imagens/temp/suco-laranja.jpg';
import prod6 from '../../../imagens/temp/sorvete.jpg';

function Slider() {
  return(
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

function Home() {
  return (
    <div>
      <Header pag={'home'} />

      <Slider />

      <main className="principal">
        {/* Info local */}
        <img className="imagemLocal" src={local} alt="Imagem do local" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas! Hic quasi consequuntur quas numquam ullam fuga voluptas...</p>
      </main>

      <div class="tipos">
        {/* Tipos de produto */}
        <MdLunchDining className="icon" id="logo" />
        <MdLocalBar className="icon" id="logo" />
        <MdDining className="icon" id="logo" />
        <MdIcecream className="icon" id="logo" />
        <MdFastfood className="icon" id="logo" />
      </div>

      <div class="produtos">
        {/* Alguns produtos */}
        <CardProd
          produto={
            {
              img:prod1,
              txtAltImg:'lancheCarneBacon',
              nome:'Lanche de carne e bacon',
              valor: '40,00'
            }
          }
        />
        <CardProd
          produto={
            {
              img:prod2,
              txtAltImg:'lancheCarneComBatata',
              nome:'Lanche de carne com batata',
              valor: '58,00'
            }
          }
        />
        <CardProd
          produto={
            {
              img:prod3,
              txtAltImg:'lanchePeixe',
              nome:'Lanche de peixe',
              valor: '52,00'
            }
          }
        />
        <CardProd
          produto={
            {
              img:prod4,
              txtAltImg:'sucoVerde',
              nome:'Suco verde',
              valor: '17,00'
            }
          }
        />
        <CardProd
          produto={
            {
              img:prod5,
              txtAltImg:'sucoLaranja',
              nome:'Suco de Laranja',
              valor: '15,00'
            }
          }
        />
        <CardProd
          produto={
            {
              img:prod6,
              txtAltImg:'sorveteMorango',
              nome:'Sorvete de morango',
              valor: '27,00'
            }
          }
        />
      </div>

      <Rodape />
    </div>
  );
}

export default Home;


