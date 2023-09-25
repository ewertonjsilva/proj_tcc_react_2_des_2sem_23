import React from 'react';

import { MdFastfood, MdMenu } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import './header.css';

function Cabecalho({ pag }) {
  return (
    <header>
      <nav className="containerNav">
        <div className="menu">
          <div className="containerLogo">
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
            <a href="#">
              <MdMenu className="icon"/>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Cabecalho;

