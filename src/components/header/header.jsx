import React, { useState } from 'react';

import { MdFastfood, MdMenu, MdShoppingCart } from 'react-icons/md';

import { Link, useNavigate } from 'react-router-dom';

import './header.css';

function Cabecalho({ pag, addItCar }) {

  const [mobile, setMobile] = useState(false); 
  const [carrinho, setCarrinho] = useState([{teste: 'aaaaa', t2: 2}]);

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
            <Link to='/carrinho' state={carrinho}><MdShoppingCart className="carrinho" /></Link>
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
        </div>
      </nav>
    </header>
  );
}

export default Cabecalho;

