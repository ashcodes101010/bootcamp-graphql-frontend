import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { REGISTER } from './graphql'
import { useMutation } from '@apollo/react-hooks'

import { Body, Title, StyledButton } from '../../styles'
import { Form } from '../Login/styles'

const Register = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const [register] = useMutation(REGISTER, {
    variables: {
      user: {
        email: email,
        password: pass,
      }
    },
    onCompleted: data => {
      localStorage.setItem('token', data.register.token)
      history.push('/')
      window.location.reload()
    },
    onError: error => {
      alert('unable to register')
    }
  })
  return (
    <Body>
        <br />
        <Title>Register</Title>
        <Form>
          <h2>Email</h2>
          <input 
            type='text' 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="email"
          />
          <h2>Password</h2>
          <input 
            type='text' 
            value={pass} 
            onChange={e => setPass(e.target.value)}
            placeholder="password" 
          />
        </Form>
        <StyledButton type='button' onClick={register}>Register</StyledButton>
    </Body>
  )
}

export default Register