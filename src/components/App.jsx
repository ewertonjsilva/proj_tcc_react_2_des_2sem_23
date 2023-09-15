import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Pagina404 from './pages/camNEnc/nEnc';
import CadUsu from './pages/usuarios/cadUsuarios';
import ListUsu from './pages/usuarios/listarUsuarios';
import Login from './pages/usuarios/login';
import CadProd from './pages/produtos/cadProduto';
import ListProd from './pages/produtos/listarProdutos';
import VerProd from './pages/produtos/produto';
import Contato from './pages/contato/contato';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadusu' element={<CadUsu />} />
        <Route path='/listusu' element={<ListUsu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadprod' element={<CadProd />} />
        <Route path='/listprod' element={<ListProd />} />
        <Route path='/produto' element={<VerProd />} />
        <Route path='/contato' element={<Contato />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
