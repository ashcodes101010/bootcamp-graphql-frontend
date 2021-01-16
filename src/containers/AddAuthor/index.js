import React, { useReducer } from 'react'
import { ADD_AUTHOR } from './graphql'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'

import { Body, Title, StyledButton } from '../../styles'
import { FormGroup } from './styles'

const AddAuthor = () => {
  const history = useHistory()
  if (!localStorage.getItem('token')) {
    history.push('/')
  }
  const reducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [form, setForm] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '', 
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
    try {
      await addAuthor(addAuthor.variables)
      alert('Author Added')
    } catch(err) {
      alert('Could not add author')
    }
  }
  return (
    <Body>
      <br />
      <Title>Add Author</Title>
      <FormGroup>
        <p>First name:&ensp; 
          <input 
            value={form.firstName} 
            onChange={e => setForm({ 'firstName': e.target.value })} 
            placeholder="first name" 
          />
        </p>
        <p>Last name:&ensp; 
          <input 
            value={form.lastName} 
            onChange={e => setForm({ 'lastName': e.target.value })} 
            placeholder="last name"
          />
        </p>
        <p>Email:&ensp; 
          <input 
            value={form.email} 
            onChange={e => setForm({ 'email': e.target.value })} 
            placeholder="email"
          />
        </p>
        <p>Age:&ensp; 
          <input 
            value={form.age ? form.age : ''} 
            onChange={e => 
              {parseInt(e.target.value) ? setForm({ 'age': parseInt(e.target.value)}) : setForm({ 'age': 0 })}} 
            placeholder="age"
          />
        </p>
        <p>Street:&ensp; 
          <input 
            value={form.street} 
            onChange={e => setForm({ 'street': e.target.value })} 
            placeholder="street"
          />
        </p>
        <p>City:&ensp;
          <input 
            value={form.city} 
            onChange={e => setForm({ 'city': e.target.value })} 
            placeholder="city"
          />
        </p>
        <p>State:&ensp; 
          <input 
            value={form.state} 
            onChange={e => setForm({ 'state': e.target.value })} 
            placeholder="state"
          />
        </p>
        <p>Zip code:&ensp; 
          <input 
            value={form.zip} 
            onChange={e => setForm({ 'zip': e.target.value })} 
            placeholder="zip"
          />
        </p>
        <StyledButton type="button" onClick={handleSubmit}>Add Author</StyledButton>
      </FormGroup>
    </Body>
  )
}

export default AddAuthor
