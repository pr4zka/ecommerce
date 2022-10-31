import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Icon } from 'react-icons-kit';
import { view } from 'react-icons-kit/ikons/view';
import { view_off } from 'react-icons-kit/ikons/view_off';
import { Link } from 'react-router-dom';

export const Login = () => {

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(view_off);
W 
  const handleToggle  = () =>{
    if (type === 'password'){
      setIcon(view)
      setType('text')
    }else{
      setIcon(view_off)
      setType('password')
    }
  }

  return (
    <div className='background'>
      <div className="container-f">
        <h2 className='f-t'>LOGIN</h2>
        <Formik>
          <Form className='form'>
            <Field type='email' name='email' placeholder='Email..' className='input i-l'/>
            <input type={type} name='password' placeholder='Password' className='input i-l'/>
            <span className='password-toogle-icon-l' onClick={handleToggle}><Icon icon={icon}/></span>
            <button className='btn-form' type='submit'>LOGIN</button>
          </Form>
        </Formik>
        <p className='text'>¿No tienes una cuenta? <Link to='/register'>Registrate aqui</Link></p>
      </div>
    </div>
  )
}
