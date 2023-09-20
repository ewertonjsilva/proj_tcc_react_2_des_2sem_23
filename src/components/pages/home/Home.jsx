import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { MdLunchDining, MdLocalBar, MdDining, MdIcecream, MdFastfood } from 'react-icons/md';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';

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

import ic_lanche from '../../../imagens/icones/lanche.svg';
import ic_combo from '../../../imagens/icones/todos.svg';
import ic_bebida from '../../../imagens/icones/suco.svg';
import ic_sobremesa from '../../../imagens/icones/icecream.svg';

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

function Home() {

  const [produtos, setProdutos] = useState(
    [
      { prd_id: 1, prd_nome: 'Hamburguer de Bacon', prd_img: prod1, prd_valor: 'R$ 21,00', prd_descricao: 'Lanche maravilhoso', prd_unidade: 'un.', img_tp_prod: ic_lanche },
      { prd_id: 2, prd_nome: 'Combo hamburguer e batata', prd_img: prod2, prd_valor: 'R$ 33,00', descricao: 'Muito delicioso', prd_unidade: 'un.', img_tp_prod: ic_combo },
      { prd_id: 3, prd_nome: 'Lanche básico', prd_img: prod3, prd_valor: 'R$ 16,00', descricao: 'Para quem come pouco', prd_unidade: 'un.', img_tp_prod: ic_lanche },
      { prd_id: 4, prd_nome: 'Suco de laranja', prd_img: prod5, prd_valor: 'R$ 8,25', descricao: 'Refrescante', prd_unidade: 'un.', img_tp_prod: ic_bebida },
      { prd_id: 5, prd_nome: 'Suco verde', prd_img: prod4, prd_valor: 'R$ 12,00', descricao: 'Verdrescante', prd_unidade: 'un.', img_tp_prod: ic_bebida },
      { prd_id: 6, prd_nome: 'Sorvete', prd_img: prod6, prd_valor: 'R$ 13,00', descricao: 'Um sorvete aleatório', prd_unidade: 'un.', img_tp_prod: ic_sobremesa }
    ]
  );

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
        {
          produtos.map(prd => {
            return <CardProd produto={prd} />
          })
        }
      </div>

      <Rodape />
    </div>
  );
}

export default Home;


