import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

import carrinho from '../../../imagens/icones/carrinho.svg';

import './produto.css'

function Produto() {

  const location = useLocation();

  const [itemCarregado, setItemCarregado] = useState({});
  const [qtd, setQtd] = useState(1);
  const [total, setTotal] = useState(0.00); 
  let carrinho = location.state.carrinho;

  useEffect(() => {
    setItemCarregado(location.state.produto);
    setTotal(location.state.produto.prd_valor);
  }, []);

  function handleAtlQtdVlr(nvVlr) {
    let totalTemp = 0;
    totalTemp = Number(nvVlr) * itemCarregado.prd_valor;
    setQtd(Number(nvVlr));
    setTotal(totalTemp.toFixed(2));
  }

  return (
    <>
      <Cabecalho carrinho={carrinho} />

      <div className="container">
        <div className='containerItem'>
          <img
            className='imagemProd'
            src={itemCarregado.prd_img}
            alt={"Imagem " + itemCarregado.prd_nome}
          />
        </div>
        <div className='containerItem'>
          <div className="titulo">
            <span id="titulo">{itemCarregado.prd_nome}</span>
            <img src={itemCarregado.img_tp_prod} className="icon" alt={itemCarregado.img_tp_prod} />
          </div>
          <span className="descricao">{itemCarregado.prd_descricao}</span>
          <span id="valor">{'R$ ' + itemCarregado.prd_valor}</span>
          <div className="comprar">
            <span>Quantidade</span>
            <input
              type="number"
              min={1}
              onChange={nvVlr => handleAtlQtdVlr(nvVlr.target.value)}
              value={qtd}
            />
            <span>Total R$ {total}</span>
            <button>
              <p>Inserir no carrinho</p>
              <img src={carrinho} alt="adicionar" />
            </button>
          </div>
        </div>
      </div>

      <Rodape />
    </>
  );
}

export default Produto;

