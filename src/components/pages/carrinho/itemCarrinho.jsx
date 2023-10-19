import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";
import './itemCarrinho.css';

import prod1 from '../../../imagens/temp/hamburger-bacon.jpg';
import prod2 from '../../../imagens/temp/hamburger-batata.jpg';
import prod3 from '../../../imagens/temp/lanche1.jpg';
import prod4 from '../../../imagens/temp/suco-laranja.jpg';
import prod5 from '../../../imagens/temp/suco2.jpg';
import prod6 from '../../../imagens/temp/sorvete.jpg';

import ic_lanche from '../../../imagens/icones/lanche.svg';
import ic_combo from '../../../imagens/icones/todos.svg';
import ic_bebida from '../../../imagens/icones/suco.svg';
import ic_sobremesa from '../../../imagens/icones/icecream.svg';

function ItemCarrinho({ item }) {
  return (
    <div className='grid'>
      <div className='carrProduto'>
        <div className='contImgCarrProd'>
          <img src={item.prd_img} alt={item.prd_nome} />
        </div>
        <span>{item.prd_nome}</span>
        <RiDeleteBin6Line />
      </div>
      <div className='carrProduto carrQtd'><RiSubtractLine />{item.quantidade}<RiAddLine /></div>
      <div className='carrProduto valores'>{item.prd_valor}</div>
      <div className='carrProduto valores'>R$ {(item.quantidade * item.prd_valor).toFixed(2)}</div>
    </div>
  );
}

export default ItemCarrinho;
