import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

import carr from '../../../imagens/icones/carrinho.svg';

import './produto.css'

function Produto({ produto, alteraTela }) {

  // const location = useLocation();

  // const [itemCarregado, setItemCarregado] = useState({});
  const [qtd, setQtd] = useState(1);
  const [total, setTotal] = useState(produto.prd_valor);

  // useEffect(() => {
  //   setItemCarregado(location.state);
  //   setTotal(location.state.prd_valor);
  // }, []);

  function handleAtlQtdVlr(nvVlr) {
    let totalTemp = 0;
    totalTemp = Number(nvVlr) * produto.prd_valor;
    setQtd(Number(nvVlr));
    setTotal(totalTemp.toFixed(2));
  }

  return (
    <>
      <Cabecalho pag={'produto'} alteraTela={alteraTela} />

      <div className="container">
        <div className='containerItem'>
          <img
            className='imagemProd'
            src={produto.prd_img}
            alt={"Imagem " + produto.prd_nome}
          />
        </div>
        <div className='containerItem'>
          <div className="titulo">
            <span id="titulo">{produto.prd_nome}</span>
            <img src={produto.img_tp_prod} className="icon" alt={produto.img_tp_prod} />
          </div>
          <span className="descricao">{produto.prd_descricao}</span>
          <span id="valor">{'R$ ' + produto.prd_valor}</span>
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
              <img src={carr} alt="adicionar" />
            </button>
          </div>
        </div>
      </div>

      <Rodape />
    </>
  );
}

export default Produto;

