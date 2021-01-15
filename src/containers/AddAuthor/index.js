import React, { useReducer } from 'react'
import { ADD_AUTHOR } from '../Home/graphql'
import { useMutation } from '@apollo/react-hooks'

import { Body, Title, StyledButton } from '../../styles'
import { FormGroup } from './styles'

const AddAuthor = () => {
  const reducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [form, setForm] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  })

  const [addAuthor] = useMutation(ADD_AUTHOR, {
    variables: {
      input: {
        firstName: form.firstName,
        lastName: form.lastName,
        age: form.age,
        email: form.email,
        address: {
          street: form.street,
          city: form.city,
          state: form.state,
          zip: form.zip,
        },
      },
    },
  })

  const handleSubmit = async () => {
    addAuthor(addAuthor.variables)
    alert('Author Added')
  }

  return (
    <Body>
      <br />
      <Title>Add Author</Title>
      <FormGroup>
        <p>First name: <input value={form.firstName} onChange={e => setForm({ 'firstName': e.target.value })} placeholder="first name" /></p>
        <p>Last name: <input value={form.lastName} onChange={e => setForm({ 'lastName': e.target.value })} placeholder="last name"/></p>
        <p>Email: <input value={form.email} onChange={e => setForm({ 'email': e.target.value })} placeholder="email" /></p>
        <p>Age: <input value={form.age ? form.age : ''} onChange={e => { parseInt(e.target.value) ? setForm({ 'age': parseInt(e.target.value)}) : setForm({ 'age': 0 })}} placeholder="age" /></p>
        <p>Street: <input value={form.street} onChange={e => setForm({ 'street': e.target.value })} placeholder="street" /></p>
        <p>City: <input value={form.city} onChange={e => setForm({ 'city': e.target.value })} placeholder="city" /></p>
        <p>State: <input value={form.state} onChange={e => setForm({ 'state': e.target.value })} placeholder="state" /></p>
        <p>Zip code: <input value={form.zip} onChange={e => setForm({ 'zip': e.target.value })} placeholder="zip" /></p>
        <StyledButton type="button" onClick={handleSubmit}>Add Author</StyledButton>
      </FormGroup>
    </Body>
  )
}

export default AddAuthor
