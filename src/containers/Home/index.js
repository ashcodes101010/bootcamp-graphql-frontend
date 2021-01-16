/* eslint-disable max-len */
import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { ALL_AUTHORS } from './graphql'
import { ADD_AUTHOR } from'../AddAuthor/graphql'
import Authors from './components/Authors/authors'
import { Body, Title, StyledButton } from '../../styles'
import { InfoBox } from './styles'

const Home = () => {
  const [addAuthor] = useMutation(ADD_AUTHOR, {
    variables: {
      input: {
        firstName: `Ash${Math.random().toString(20).substr(2, 2)}`,
        lastName: `Colt${Math.random().toString(20).substr(2, 2)}`,
        age: Math.round(Math.random() * 84 + 16),
        email: `ashleighcoltman${Math.random().toString(20).substr(2, 6)}@college.harvard.edu`,
        address: {
          street: '114 Mt. Auburn St.',
          city: 'Cambridge',
          state: 'MA',
          zip: '02138',
        }
      },
    },
    update: (client, { data: { addAuthor } }) => {
      try {
        const data = client.readQuery({ query: ALL_AUTHORS })
    
        data.authors = [...data.authors, addAuthor]
    
        client.writeQuery({ query: ALL_AUTHORS, data })
      } catch (error) {
        throw new Error('could not add to cache')
      }
    }
  })
  
  return (
    <Body>
      <br />
      <Title>Authors' Avenue</Title>
      <InfoBox>Welcome to Authors' Avenue! 
        <p>Look for other authors and select their name to view their information.</p>
        <p>Can't find an author? Log in and add them!</p>
      </InfoBox>
      <StyledButton type="button" onClick={addAuthor}>Add me (Ash)!</StyledButton>
      <Authors />
      <br />
    </Body>
  )
}

export default Home
