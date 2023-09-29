import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { MdLunchDining, MdLocalBar, MdDining, MdIcecream, MdFastfood } from 'react-icons/md';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';
import CardProd from '../produtos/cardProduto';

import promo1 from '../../../imagens/promo1.png';
import promo2 from '../../../imagens/promo2.png';
import promo3 from '../../../imagens/promo3.png';
import promo4 from '../../../imagens/promo4.png';

import local from '../../../imagens/local.jpg';

import prod1 from '../../../imagens/temp/hamburger-bacon.jpg';
import prod2 from '../../../imagens/temp/hamburger-batata.jpg';
import prod3 from '../../../imagens/temp/lanche1.jpg';
import prod4 from '../../../imagens/temp/suco-laranja.jpg';
import prod5 from '../../../imagens/temp/suco2.jpg';
import prod6 from '../../../imagens/temp/sorvete.jpg';

import ic_lanche from '../../../imagens/icones/lanche.svg';
import ic_combo from '../../../imagens/icones/todos.svg';
import ic_bebida from '../../../imagens/icones/suco.svg';
import ic_sobremesa from '../../../imagens/icones/icecream.svg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';

function Home() {

  const [produtos, setProdutos] = useState(
    [
      {
        prd_id: 1,
        prd_nome: 'Hamburguer de Bacon',
        prd_img: prod1,
        prd_valor: '21.00',
        prd_descricao: 'Lanche maravilhoso',
        prd_unidade: 'un.',
        img_tp_prod: ic_lanche
      },
      {
        prd_id: 2,
        prd_nome: 'Combo hamburguer e batata',
        prd_img: prod2,
        prd_valor: '33.00',
        prd_descricao: 'Muito delicioso',
        prd_unidade: 'un.',
        img_tp_prod: ic_combo
      },
      {
        prd_id: 3,
        prd_nome: 'Lanche básico',
        prd_img: prod3,
        prd_valor: '16.00',
        prd_descricao: 'Para quem come pouco',
        prd_unidade: 'un.',
        img_tp_prod: ic_lanche
      },
      {
        prd_id: 4,
        prd_nome: 'Suco de laranja',
        prd_img: prod4,
        prd_valor: '8.25',
        prd_descricao: 'Refrescante',
        prd_unidade: 'copo',
        img_tp_prod: ic_bebida
      },
      {
        prd_id: 5,
        prd_nome: 'Suco verde',
        prd_img: prod5,
        prd_valor: '12.00',
        prd_descricao: 'Verdrescante',
        prd_unidade: 'copo',
        img_tp_prod: ic_bebida
      },
      {
        prd_id: 6,
        prd_nome: 'Sorvete',
        prd_img: prod6,
        prd_valor: '13.00',
        prd_descricao: 'Um sorvete aleatório',
        prd_unidade: 'taça',
        img_tp_prod: ic_sobremesa
      },
    ]
  );

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

      <div className="tipos">
        <MdLunchDining className="tpicon" />
        <MdLocalBar className="tpicon" />
        <MdDining className="tpicon" />
        <MdIcecream className="tpicon" />
        <MdFastfood className="tpicon" />
      </div>

      <div className='produtos'>
        {
          produtos.map(
            prd => {
              return <CardProd produto={prd} />
            }
          )
        }
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

