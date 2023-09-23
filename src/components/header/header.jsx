import React from 'react';

import { MdFastfood, MdMenu } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import './header.css';

function Cabecalho() {
  return (
    <header>
      <nav className="containerNav">
        <div className="menu">
          <div>
            <MdFastfood className="icon" id="logo" />
            <label for="" id="titulo">BomBurguer</label>
          </div>
          <div className="menuGrande">
            <Link to='/'>Home</Link>
            <Link to='/listprod'>Produtos</Link>
            <Link to='/cadusu'>Cadastrar</Link>
            <Link to='/contato'>Contato</Link>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Cabecalho;

