import React, { useState } from 'react';

import { MdFastfood, MdMenu } from 'react-icons/md';
import { RiShoppingCart2Line, RiShoppingCart2Fill } from "react-icons/ri";

import { Link, useNavigate } from 'react-router-dom';

import imgTemp from '../../imagens/temp/macarrao.jpg';

import './header.css';

function Cabecalho({ pag, addItCar }) {

  const [mobile, setMobile] = useState(false);
  const [carrinho, setCarrinho] = useState(
    [
      {
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
      },
    ]);

  function ativaMenu() {
    if (mobile === false) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  function addItCar(itens) {
    setCarrinho(itens);
  }

  return (
    <header>
      <nav className="containerNav">
        <div className="menu">
          <div className="containerLogo">
            <MdFastfood className="icon" id="logo" />
            <label htmlFor="logo" id="nome">BomBurguer</label>
          </div>
          <div className="menuGrande">
            <Link to='/' className={pag === 'home' ? 'active' : ''}>Home</Link>
            <Link to='/listprod' className={pag === 'produtos' ? 'active' : ''}>Produtos</Link>
            <Link to='/cadusu' className={pag === 'cadUsu' ? 'active' : ''}>Cadastrar</Link>
            <Link to='/contato' className={pag === 'contato' ? 'active' : ''}>Contato</Link>
            <Link to='/login' className={pag === 'login' ? 'active' : ''}>Login</Link>
            <Link to='/carrinho' state={carrinho}>{carrinho.length === 0 ? <RiShoppingCart2Line className="carrinho" /> : <RiShoppingCart2Fill className="carrinho" />}</Link>
          </div>
          <div className="menuMobile">
            <a href="#" onClick={ativaMenu}>
              <MdMenu className="icon" />
            </a>
          </div>
        </div>
        <div className={mobile === false ? "menuMobileExpandidon" : "menuMobileExpandidos"}>
          <Link to='/' className={pag === 'home' ? 'active' : ''}>Home</Link>
          <Link to='/listprod' className={pag === 'produtos' ? 'active' : ''}>Produtos</Link>
          <Link to='/cadusu' className={pag === 'cadUsu' ? 'active' : ''}>Cadastrar</Link>
          <Link to='/contato' className={pag === 'contato' ? 'active' : ''}>Contato</Link>
          <Link to='/login' className={pag === 'login' ? 'active' : ''}>Login</Link>
          <Link to='/carrinho' state={carrinho}>{carrinho.length === 0 ? <RiShoppingCart2Line className="carrinho" /> : <RiShoppingCart2Fill className="carrinho" />}</Link>
        </div>
      </nav>
    </header>
  );
}

export default Cabecalho;

