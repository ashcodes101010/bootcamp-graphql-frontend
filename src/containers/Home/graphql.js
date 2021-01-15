import gql from 'graphql-tag'

export const ALL_AUTHORS = gql`
  query authors {
    authors {
      id
      firstName
      lastName
      books {
        id
        title
      }
    }
  }
`
