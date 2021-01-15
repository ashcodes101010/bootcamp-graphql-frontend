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

export const ADD_AUTHOR = gql`
  mutation addAuthor ($input: authorInput!) {
    addAuthor (input: $input) {
      id
      firstName
      lastName
    }
  }
`
