import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { MdFastfood, MdMenu } from 'react-icons/md';

import './header.css';

function Header({ pag }) {

  let navigate = useNavigate();
  const [mobile, setMobile] = useState(false);

  function ativaMenu() {
    if (mobile === false) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  return (
    <header>
      {/* Logo e navegação */}
      <nav className="containerNav">
        <div className="menu">
          <div>
            <MdFastfood className="icon" id="logo" />
            <label for="" id="titulo">BomBurguer</label>
          </div>
          <div className="menuGrande">
            <Link to='/' className={pag === 'home' ? 'active' : ''}>Home</Link>
            <Link to='/listprod' className={pag === 'produtos' ? 'active' : ''}>Produtos</Link>
            <Link to='/cadusu' className={pag === 'cadUsu' ? 'active' : ''}>Cadastrar</Link>
            <Link to='/contato' className={pag === 'contato' ? 'active' : ''}>Contato</Link>
            <Link to='/login' className={pag === 'login' ? 'active' : ''}>Login</Link>
          </div>
          <div className="menuMobile">
            <a href="#" onClick={ativaMenu} className="icon" id="mIco">
              <MdMenu className="icon" id="logo" />
            </a>
          </div>
        </div>
        <div className={mobile === false ? "menuMobileExpandidon" : "menuMobileExpandidos"} id="mostraOpMobile">
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

export default Header;
