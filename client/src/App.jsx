import { ShopContainer } from './context/Contex';
import { Routes, Route } from 'react-router-dom';
// import { Login } from './pages/Login'
import './index.css';
import { Home } from './pages/Home';
import Navbar from './components/Navbar';
import { Cargos } from './pagesref/Cargos';
import Ciudades from './pagesref/Ciudades';
import Empleados from './pagesref/Empleados';
import EstadoCivil from './pagesref/EstadoCivil';
import Marcas from './pagesref/Marcas';
import Mercaderias from './pagesref/Mercaderias';

function App() {

  return (
    <div>
      <ShopContainer>
      <Navbar/>
        <Routes>
          {/* <Route path='/login' element={<Login />} /> */}
           <Route path='/home' element={<Home />} />
           <Route path='/cargos' element={<Cargos />} />
           <Route path='/ciudades' element={<Ciudades/>} />
           <Route path='/empleados' element={<Empleados/>} />
           <Route path='/estados' element={<EstadoCivil/>} />
           <Route path='/marcas' element={<Marcas/>} />
           <Route path='/mercaderias' element={<Mercaderias/>} />
        </Routes>
      </ShopContainer>
    </div>
  )
}

export default App
