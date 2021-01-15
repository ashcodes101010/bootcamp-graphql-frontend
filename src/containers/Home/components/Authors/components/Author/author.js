import React from 'react'
import { StyledAuthor } from './styles'
import { StyledLink } from './styles'

const Author = ({ first, last, id }) => (
  <StyledAuthor>
    <StyledLink to={`/author/${id}`}>
      {`${first}  ${last}`}
    </StyledLink>
  </StyledAuthor>
)

export default Author
