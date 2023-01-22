import React from 'react'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { useAuthStore } from '../store/auth'
import {useNavigate} from 'react-router-dom'



const Navbar = () => {

const logout = useAuthStore(state => state.logout)
const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const [showMov, setShowMov] = useState(false);


  const ToggleRef = () =>{
    setShow(!show);
    setShowMov(false);
  }
  const ToggleMov = () =>{
    setShowMov(!showMov);
    setShow(false);
  }

  return (
    <>
    <nav className='bg-slate-100 flex  w-full border-solid border-b-[2px] border-sky-100'>
        <ul className='flex p-3 text-slate-900 ml-10'>
            <li className='pr-3 p-1 hover:text-slate-600
            hover:font-semibold
             hover:cursor-pointer ease-in-out duration-100 '
            onClick={ToggleRef}>
                Referenciales
            </li>
            <li className='ml-14 pl-3 pr-3 p-1 hover:text-slate-600
            hover:font-semibold hover:cursor-pointer ease-in-out duration-100 '
            onClick={ToggleMov}>
              Movimientos
            </li>
            <li 
            className='ml-12 pr-3 p-1
            hover:text-slate-600
            hover:font-semibold hover:cursor-pointer ease-in-out duration-100'>
             <button onClick={() => {
              logout() 
              navigate('/login')  
            }}>Salir del Sistema</button>
            </li>

            {show === true ? (
              <div className='list bg-slate-100 absolute top-16 left-10 	w-36 flex flex-col-reverse rounded-xl
              border-solid border-2 border-sky-100'>
              <ul className='p-3'>
                <li className='pb-2'>
                  <NavLink to='cargos'>Cargos</NavLink>
                </li>
                <li className='pb-2'>
                  <NavLink to='ciudades'>Ciudades</NavLink>
                </li>
                <li className='pb-2'>
                 <NavLink to='empleados'>Empleados</NavLink>
                </li>
                <li className='pb-2'>
                  <NavLink to='estados'>Estado Civil</NavLink>
                </li>
                <li className='pb-2'>
                  <NavLink to='marcas'>Marcas</NavLink>
                </li>
                <li className='pb-2'>
                  <NavLink to='mercaderias'>Mercaderias</NavLink>
                </li>
                <li className='pb-2'>
                  <NavLink to='motivoajuste'>Motivo Ajuste</NavLink>
                </li>
                <li className='pb-2'>
                  <NavLink to='nacionalidades'>Nacionalidades</NavLink>
                </li>
                <li className='pb-2'>
                  <NavLink to='paises'>Paises</NavLink>
                </li>
                <li className='pb-2'>
                  <NavLink to='proveedores'>Proveedores</NavLink>
                </li>
                <li className='pb-2'>
                  <NavLink to='/sucursales'>Sucursales</NavLink>
                </li>
              </ul>
            </div>
            ): null}
            {
              showMov === true ? (
                <div className='list  bg-slate-100 absolute top-16 left-52 	w-36 flex flex-col-reverse rounded-xl border-solid border-2 border-sky-100'>
                  <ul className='p-3'>
                    <li className='pb-2'>
                      <NavLink to='/ajustes'>Ajustes</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to='/compras'>Compras</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to='/cuentas-a-pagar'>Cuentas a Pagar</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to='/libro-compras'>Libro de Compras</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to='/nota-de-credito'>Nota de Crédito</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to='/nota-de-remision'>Nota de Remísion</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to='/orden-de-compra'>Orden de Compra</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to='/pedidos'>Pedidos</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to='/presupuesto-de-compra'>Presupuestos</NavLink>
                    </li>
                    <li className='pb-2'>
                      <NavLink to='/stock'>Stock</NavLink>
                    </li>
                  </ul>
                </div>
              ) : null
            }
        </ul>
    </nav>
    </>
  )
}

export default Navbar