import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Cabecalho from '../../header/header';
import Rodape from '../../footer/footer';

import carrinho from '../../../imagens/icones/carrinho.svg';
import imgTemp from '../../../imagens/temp/macarrao.jpg';

import './produto.css'

function Produto() {

  const location = useLocation();

  const [itemCarregado, setItemCarregado] = useState({});
  const [qtd, setQtd] = useState(1);
  const [total, setTotal] = useState(0.00);
  const [ddSist, setDdSist] = useState(JSON.parse(localStorage.getItem('ddSist')));

  useEffect(() => {
    setItemCarregado(location.state);
    setTotal(location.state.prd_valor);
    const verifDdSist = JSON.parse(localStorage.getItem('ddSist'));
    if (verifDdSist === null) {
      localStorage.setItem('ddSist', JSON([
        {
          login: {
            id: 0,
            nome: '',
            tipo: ''
          },
          carrinho: [{
            prd_id: 1,
            prd_nome: 'Hamburguer de Bacon',
            prd_img: imgTemp,
            prd_valor: '21.00',
            prd_descricao: 'Lanche maravilhoso',
            prd_unidade: 'un.',
            img_tp_prod: imgTemp,
            quantidade: 1
          },
          {
            prd_id: 2,
            prd_nome: 'Combo hamburguer e batata',
            prd_img: imgTemp,
            prd_valor: '33.00',
            prd_descricao: 'Muito delicioso',
            prd_unidade: 'un.',
            img_tp_prod: imgTemp,
            quantidade: 2
          },]
        }
      ]
      ));
      setDdSist(JSON.parse(localStorage.getItem('ddSist')));
    }
    console.log(ddSist);
  }, []);

  function handleAtlQtdVlr(nvVlr) {
    let totalTemp = 0;
    totalTemp = Number(nvVlr) * itemCarregado.prd_valor;
    setQtd(Number(nvVlr));
    setTotal(totalTemp.toFixed(2));
  }

  function handleAddCarrinho() {
    let tempCarr = localStorage.getItem('ddSist');
    let tempLog = tempCarr.login;
    console.log(tempLog);
  }

  return (
    <>
      <Cabecalho />

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
            <button onClick={() => handleAddCarrinho()}>
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

