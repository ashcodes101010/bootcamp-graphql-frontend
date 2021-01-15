import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { ALL_AUTHORS } from '../../graphql'
import Author from './components/Author/author'
import { StyledButton } from '../../../../styles'

const Authors = () => {
  const [authors, {
    data, loading, error, called,
  }] = useLazyQuery(ALL_AUTHORS)

  if (error) {
    console.log(error)
    return 'There was an error.'
  }

  if (called) {
    return (
      <>
        {loading ? 'loading...' : data.authors.map(author => (
          <>
            <Author first={author.firstName} last={author.lastName} id={author.id} />
          </>
        ))}
      </>
    )
  }
  return (
    <>
      <StyledButton type="button" onClick={authors}>See all authors</StyledButton>
    </>
  )
}


export default Authors
