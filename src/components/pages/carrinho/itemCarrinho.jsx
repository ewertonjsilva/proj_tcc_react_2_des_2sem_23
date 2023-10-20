import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";
import './itemCarrinho.css';

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

