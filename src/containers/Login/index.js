import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LOGIN } from './graphql'
import { useMutation } from '@apollo/react-hooks'

import { Body, Title, StyledButton } from '../../styles'
import { Form } from './styles'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  if (localStorage.getItem('token')) {
    history.push('/')
  }
  const [login] = useMutation(LOGIN, {
    variables: {
      email: email,
      password: pass,
    },
    onCompleted: data => {
      localStorage.setItem('token', data.login.token)
      history.push('/')
      window.location.reload()
    },
    onError: error => {
      alert('Invalid username/password combo')
    }
  })
  return (
    <Body>
        <br />
        <Title>Login</Title>
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
            type='password' 
            value={pass} 
            onChange={e => setPass(e.target.value)}
            placeholder="password"
          />
        </Form>
        <StyledButton type='button' onClick={login}>Login</StyledButton>
    </Body>
  )
}

export default Login
