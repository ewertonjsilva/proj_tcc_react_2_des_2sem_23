import React, { useState } from 'react';

import { MdFastfood, MdMenu } from 'react-icons/md';
import { RiShoppingCart2Line, RiShoppingCart2Fill } from "react-icons/ri";

import { Link, useNavigate } from 'react-router-dom';

import './header.css';

function Cabecalho({ pag, carrinho }) {

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
      <nav className="containerNav">
        <div className="menu">
          <div className="containerLogo">
            <MdFastfood className="icon" id="logo" />
            <label htmlFor="logo" id="nome">BomBurguer</label>
          </div>
          <div className="menuGrande">
            <Link to='/' className={pag === 'home' ? 'active' : ''}>Home</Link>
            <Link to='/listprod' className={pag === 'produtos' ? 'active' : ''} state={carrinho}>Produtos</Link>
            <Link to='/cadusu' className={pag === 'cadUsu' ? 'active' : ''} state={carrinho}>Cadastrar</Link>
            <Link to='/contato' className={pag === 'contato' ? 'active' : ''} state={carrinho}>Contato</Link>
            <Link to='/login' className={pag === 'login' ? 'active' : ''} state={carrinho}>Login</Link> 
            <Link to='/carrinho' className={pag === 'carrinho' ? 'active' : ''} state={carrinho}><RiShoppingCart2Line className='carrinho' /></Link>
            {/* <Link
              to='/carrinho'
              state={carrinho}
              className={pag === 'carrinho' ? 'active' : ''}
            >
              {
                carrinho.length === 0
                  ?
                  <RiShoppingCart2Line className='carrinho' />
                  :
                  <RiShoppingCart2Fill className='carrinho' />
              }
            </Link> */}
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
          <Link to='/carrinho' className={pag === 'carrinho' ? 'active' : ''}><RiShoppingCart2Line className='carrinho' /></Link>
          {/* <Link
            to='/carrinho'
            state={carrinho}
            className={pag === 'carrinho' ? 'active' : ''}
          >
            {
              carrinho.length === 0
                ?
                <RiShoppingCart2Line className='carrinho' />
                :
                <RiShoppingCart2Fill className='carrinho' />
            }
          </Link> */}
        </div>
      </nav>
    </header>
  );
}

export default Cabecalho;

