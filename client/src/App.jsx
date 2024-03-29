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
import PedidosForm from "./components/PedidosForm";
import ComprasForm from "./components/ComprasForm";
import Test from "./pagesmov/Test";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mercaderias from "./pagesmov/Mercaderias";
import MercaderiasForm from "./pagesmov/MercaderiasForm";
import SucursalesForm from "./pagesref/SucursalesForm";
import Services from "./servicios/Services";
import ServicesForm from "./servicios/ServicesForm";
import ComprasDetalle from "./pagesmov/ComprasDetalle";
import ComprasDetalleForm from "./pagesmov/ComprasDetalleForm";

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <div>
      <TaskContextProvider>
        <ShopContainer>
          <ToastContainer />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes isAllowed={isAuth} />}>
              <Route path="/" element={<Navbar />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cargos" element={<Cargos />} />

              <Route path="/test" element={<Test />} />

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
              <Route path="/new/compra" element={<ComprasForm />} />
              <Route path="/edit/compras/:id" element={<ComprasForm />} />

              <Route path="/mercaderias" element={<Mercaderias />} />
              <Route path="/new/mercaderias" element={<MercaderiasForm />} />
              <Route path="/edit/mercaderias/:id" element={<ComprasForm />} />

              <Route path="/sucursales" element={<Sucursales />} />
              <Route path="/new/sucursales" element={<SucursalesForm />} />
              <Route path="/edit/sucursales/:id" element={<SucursalesForm />} />

              <Route path="/services" element={<Services />} />
              <Route path="/new/service" element={<ServicesForm />} />
              <Route path="/edit/service/:id" element={<ServicesForm />} />


              <Route path="/comprasDetalle" element={<ComprasDetalle />} />
              <Route path="/new/comprasDetalle" element={<ComprasDetalleForm />} />
              <Route path="/edit/comprasDetalle/:id" element={<ComprasDetalleForm />} />

              <Route path="/cuentas-a-pagar" element={<Cuentas />} />
              <Route path="/libro-compras" element={<LibroCompras />} />
              <Route path="/nota-de-credito" element={<NotaCredito />} />
              <Route path="/nota-de-remision" element={<NotaRemision />} />
              <Route path="/orden-de-compra" element={<OrdenCompras />} />

              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/new/pedido" element={<PedidosForm />} />
              <Route path="/edit/pedidos/:id" element={<PedidosForm />} />

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
