import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useShop } from '../context/Contex'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import '../../src/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usePassword from '../password/usePassword'

const Register = () => {

  const [PasswordInputType, ToggleIcon] = usePassword();

 const navigate = useNavigate()
  const { registerRequest } = useShop()

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })


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
            <Field name="firstName" placeholder="First Name"  className='input'/>
            <Field name="lastName" placeholder="Last Name"  className='input'/>
            <Field type="email" name="email" placeholder="Example@gmail.com"  className='input'/>
            <Field component={PasswordInputType} name="password"  placeholder="password" className='input' />
            <span className='password-toogle-icon'>{ToggleIcon}</span>
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