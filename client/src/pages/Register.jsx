import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useShop } from '../context/Contex'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'



const Register = () => {

 const navigate = useNavigate()
  const { registerRequest } = useShop()

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })


  return (
    <div>
      <Formik initialValues={user}
        onSubmit={async (values, actions) => {
          await registerRequest(values)
          navigate('/login')
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="firstName" placeholder="First Name" />
            <Field name="lastName" placeholder="Last Name" />
            <Field type="email" name="email" placeholder="Example@gmail.com" />
            <Field component="input" name="password" placeholder="password" />
            <button type='submit' disabled={isSubmitting}>{isSubmitting ? (
              <AiOutlineLoading3Quarters />) : 'Register'
            }</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register