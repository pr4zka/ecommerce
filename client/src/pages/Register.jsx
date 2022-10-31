import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { useShop } from '../context/Contex';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import '../../src/index.css';
import { Icon } from 'react-icons-kit';
import { view } from 'react-icons-kit/ikons/view';
import { view_off } from 'react-icons-kit/ikons/view_off';

const Register = () => {


  const navigate = useNavigate()
  const { registerRequest } = useShop()

  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(view_off)

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

  const handleToggle = () => {
    if (type === "password") {
      setIcon(view)
      setType('text')
    } else {
      setIcon(view_off)
      setType('password')
    }
  }

  return (
    <div className="background">
      <div className='container-f'>
        <h2 className='f-t'>REGISTER</h2>
        <Formik initialValues={user}
          onSubmit={async (values, actions) => {
            await registerRequest(values)
            navigate('/login')
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className='form'>
              <Field name="firstName" placeholder="First Name" className='input' />
              <Field name="lastName" placeholder="Last Name" className='input' />
              <Field type="email" name="email" placeholder="Example@gmail.com" className='input' />
              <input type={type} name="password" placeholder="Password" className='input' />
              <span className='password-toogle-icon' onClick={handleToggle}><Icon icon={icon} /></span>
              <button className='btn-form' type='submit' disabled={isSubmitting}>{isSubmitting ? (
                <AiOutlineLoading3Quarters />) : 'REGISTER'
              }</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Register