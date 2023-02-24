import { ShopContainer } from "./context/Contex";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import "./index.css";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { Cargos } from "./pagesref/Cargos";
import Ciudades from "./pagesref/Ciudades";
import CiudadesForm from "./pagesref/CiuadesForm";
import Empleados from "./pagesref/Empleados";
import EstadoCivil from "./pagesref/EstadoCivil";
import Marcas from "./pagesref/Marcas";
import Mercaderias from "./pagesref/Mercaderias";
import MotivoAjuste from "./pagesref/MotivoAjuste";
import Nacionalidades from "./pagesref/Nacionalidades";
import Paises from "./pagesref/Paises";
import Proveedores from "./pagesref/Proveedores";
import Sucursales from "./pagesref/Sucursales";
import Ajustes from "./pagesmov/Ajustes";
import Compras from "./pagesmov/Compras";
import Cuentas from "./pagesmov/Cuentas";
import LibroCompras from "./pagesmov/LibroCompras";
import NotaCredito from "./pagesmov/NotaCredito";
import NotaRemision from "./pagesmov/NotaRemision";
import OrdenCompras from "./pagesmov/OrdenCompras";
import Pedidos from "./pagesmov/Pedidos";
import PresupuestoCompra from "./pagesmov/PresupuestoCompra";
import Stock from "./pagesmov/Stock";
import { ProtectedRoutes } from "./components/PotectedRoutes";
import { useAuthStore } from "./store/auth";
import { TaskContextProvider } from "./context/TaskContext";

function App() {

  const isAuth = useAuthStore((state) => state.isAuth);
 
  return (
    <div>
      <TaskContextProvider>
        <ShopContainer>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes isAllowed={isAuth} />}>
              <Route path="/" element={<Navbar />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cargos" element={<Cargos />} />
              
              <Route path="/ciudades" element={<Ciudades />} />
              <Route path="/edit/ciudades/:id" element={<CiudadesForm />} />
              <Route path="/new/ciudades" element={<CiudadesForm />} />

              <Route path="/empleados" element={<Empleados />} />
              <Route path="/estados" element={<EstadoCivil />} />
              <Route path="/marcas" element={<Marcas />} />
              <Route path="/mercaderias" element={<Mercaderias />} />
              <Route path="/motivoajuste" element={<MotivoAjuste />} />
              <Route path="/nacionalidades" element={<Nacionalidades />} />
              <Route path="/paises" element={<Paises />} />
              <Route path="/proveedores" element={<Proveedores />} />
              <Route path="/sucursales" element={<Sucursales />} />
              <Route path="/ajustes" element={<Ajustes />} />
              <Route path="/compras" element={<Compras />} />
              <Route path="/cuentas-a-pagar" element={<Cuentas />} />
              <Route path="/libro-compras" element={<LibroCompras />} />
              <Route path="/nota-de-credito" element={<NotaCredito />} />
              <Route path="/nota-de-remision" element={<NotaRemision />} />
              <Route path="/orden-de-compra" element={<OrdenCompras />} />
              <Route path="/pedidos" element={<Pedidos />} />
              <Route
                path="/presupuesto-de-compra"
                element={<PresupuestoCompra />}
              />
              <Route path="*" element={<Home />} />
              <Route path="/stock" element={<Stock />} />
            </Route>
          </Routes>
        </ShopContainer>
      </TaskContextProvider>
    </div>
  );
}

export default App;
