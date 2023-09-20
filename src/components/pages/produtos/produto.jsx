import React from 'react';

import imgTemp from '../../../imagens/temp/salada.jpg';
import imgTemp2 from '../../../imagens/icones/batata_cor.svg';
import carrinho from '../../../imagens/icones/carrinho.svg';

import { MdSearch } from "react-icons/md";

import './produto.css';

function Produto() {
  return (
    <div>
      <div className="menuPesquisa">
        <div className="opPesquisa">
          <select name="tipoProd" id="tipo">
            <option selected value="0">-</option>
            <option value="1">Lanche</option>
            <option value="2">Bebida</option>
            <option value="3">Porção</option>
            <option value="3">Sobremesa</option>
          </select>
        </div>
        <div className="valorPesquisa">
          <input type="text" />
            <MdSearch className="icon" />
        </div>
      </div>

      <div className="container">
        <img src={imgTemp} alt="salada" />
          <div>
            <div className="titulo">
              <span id="titulo">Nome do produto</span>
              <div className='tipo'>
                <img src={imgTemp2} />
              </div>
            </div>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat fugit quas, optio consequuntur inventore in esse cumque totam delectus enim cum recusandae laboriosam error nesciunt molestias? Accusantium voluptatem quia voluptates.</span>
            <span id="valor">R$ 99,99</span>
            <div className="comprar">
              <span>Quantidade</span>
              <input type="number" placeholder="1" />
                <span>Valor R$ 99,99</span>
                <button>
                  <p>Inserir no carrinho</p>
                  <img src={carrinho} alt="adicionar" />
                </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Produto;
