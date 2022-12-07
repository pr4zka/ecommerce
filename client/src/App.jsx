import { ShopContainer } from './context/Contex'
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import './index.css';

function App() {

  return (
    <div>
      <ShopContainer>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </ShopContainer>
    </div>
  )
}

export default App
