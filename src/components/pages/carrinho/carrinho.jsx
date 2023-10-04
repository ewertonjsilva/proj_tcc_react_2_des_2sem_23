import React from 'react';
import { useLocation } from 'react-router-dom';

import './carrinho.css';

function Carrinho() {
    const location = useLocation();

    console.log(location.state);
    return (
        <div className='centraliza'>
            <div className='grid'>
                <div>
                    <div>Imagem</div>
                    <span>Produto</span>
                </div>
                <div>Quantidade</div>
                <div>Valor</div>
                <div>Total</div>
            </div>
        </div>
    );
}

export default Carrinho;
