import React from 'react'
import { useState } from 'react'
import navbar from '../styles/navbar.css'
import {NavLink} from 'react-router-dom'
const Navbar = () => {

  const [show, setShow] = useState(false);
  const [showMov, setShowMov] = useState(false);
  const ToggleRef = () =>{
    setShow(!show);
  }
  const ToggleMov = () =>{
    setShowMov(!showMov);
  }

  return (
    <>
    <nav className='navbar'>
        <ul className='list'>
            <li onClick={ToggleRef}>
                Referenciales
            </li>
            <li onClick={ToggleMov}>
              Movimientos
            </li>
            <li>
              Salir del sistema
            </li>

            {show === true ? (
              <div className='ref-box'>
              <ul className='ref-list'>
                <li>
                  <NavLink to='cargos'>Cargos</NavLink>
                </li>
                <li>
                  <NavLink to='ciudades'>Ciudades</NavLink>
                </li>
                <li>
                 <NavLink to='empleados'>Empleados</NavLink>
                </li>
                <li>
                  <NavLink to='estados'>Estado Civil</NavLink>
                </li>
                <li>
                  <NavLink to='marcas'>Marcas</NavLink>
                </li>
                <li>
                  <NavLink to='mercaderias'>Mercaderias</NavLink>
                </li>
                <li>
                  Motivo de Ajuste
                </li>
                <li>
                  Nacionalidades
                </li>
                <li>
                  Paises
                </li>
                <li>
                  Proveedores
                </li>
                <li>
                  Sucursales
                </li>
              </ul>
            </div>
            ): null}
            {
              showMov === true ? (
                <div className='mov-box'>
                  <ul className='mov-list'>
                    <li>Ajustes</li>
                    <li>Compras</li>
                    <li>Cuentas a Pagar</li>
                    <li>Libro Compra</li>
                    <li>Nota de credito</li>
                    <li>Nota de Remisión</li>
                    <li>Orden de Compra</li>
                    <li>Pedidos</li>
                    <li>Presupuesto Compra</li>
                    <li>Stock</li>
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