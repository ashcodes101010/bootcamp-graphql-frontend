import React from 'react'
import { StyledBooks } from './styles'

const Books = ({ books }) => {
  return (
    <StyledBooks>
      {books && 
        <ul>
          {books.map(book => {
            return (
              <li key={book.id}>{book.title}</li>
            )
          })}
        </ul>
      }
    </StyledBooks>
  )
}

export default Books
