import React, { useReducer } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { SPECIFIC_AUTHOR, ADD_BOOK } from './graphql'
import { useParams } from 'react-router-dom'

import { Body, Title } from '../../styles'
import { PersonalInfo, PageArrangement, BookSection, BookForm } from './styles'
import Books from '../../components/Books'

const AuthorPage = () => {
  const userId = useParams()

  const reducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [form, setForm] = useReducer(reducer, {
    title: '',
    language: '',
    numPages: 0,
    date: '',
    authorId: userId.id
  })
  
  const { data, loading, error } = useQuery(SPECIFIC_AUTHOR, {
    variables: {id: userId.id}
  })

  const [addBook] = useMutation(ADD_BOOK, {
    variables: {
      input: {
        title: form.title,
        language: form.language,
        numPages: form.numPages,
        authorId: userId.id,
        publisherId: '40465945-0956-41d4-bff3-e503ba72c501', // placeholder
        bestseller: false,
        datePublished: form.date
      }
    },
    update: (client, { data: { addBook } }) => {
      try {
        const data = client.readQuery({ 
          query: SPECIFIC_AUTHOR, 
          variables: { id: userId.id } 
        })
        
        data.authorById.books = [...data.authorById.books, addBook]
    
        client.writeQuery({ query: SPECIFIC_AUTHOR, data })
      } catch (error) {
        console.log(error)
        throw new Error('could not add to cache')
      }
    }, 
  })

  if (loading) return 'Loading...'
  if (error) return 'There was an error.'
 
  const { authorById: {firstName, lastName, email, age, address, books}} = data
  
  return (
    <Body>
      <br />
      <Title>{`${firstName} ${lastName}`}</Title>
      <PageArrangement>
        <PersonalInfo>
          <p>Email: {email.toLowerCase()}</p>
          <p>Age: {age}</p>
          <p>Address: {`${address.street} ${address.city}, ${address.state} ${address.zip}`}</p>
        </PersonalInfo>
        <BookSection>
          <h1>Books</h1>
          <Books books={books} />
          <BookForm>
            <p>Title:&ensp; 
              <input 
                value={form.title} 
                onChange={e => setForm({ 'title': e.target.value })} 
                placeholder="Title"
              />
            </p>
            <p>Language:&ensp; 
              <input 
                value={form.language} 
                onChange={e => setForm({ 'language': e.target.value })} 
                placeholder="Language"
              />
            </p>
            <p>Publication date:&ensp; 
              <input 
                type="date" 
                value={form.date} 
                onChange={e => setForm({ 'date': e.target.value })} 
                placeholder="Date Published"
              />
            </p>
            <p>Page count:&ensp; 
              <input 
                value={form.numPages ? form.numPages : ''} 
                onChange={e => 
                  {parseInt(e.target.value) ? setForm({ 'numPages': parseInt(e.target.value)}) : setForm({ 'numPages': 0 })}} 
                placeholder="Page Count"
              />
            </p>
            <button type="button" onClick={addBook}>Add Book</button>
          </BookForm>
        </BookSection>
      </PageArrangement>
    </Body>
  )
}

export default AuthorPage
