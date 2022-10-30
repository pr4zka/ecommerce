import Register from './pages/Register'
import { ShopContainer } from './context/Contex'
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'


function App() {

  return (
    <div>
      <ShopContainer>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </ShopContainer>
    </div>
  )
}

export default App
