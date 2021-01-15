import gql from 'graphql-tag'

export const SPECIFIC_AUTHOR = gql`
  query authorById ($id: ID!) {
    authorById(id: $id) {
      firstName
      lastName
      email
      age
      books {
        id
        title
      }
      address {
        street
        state
        zip
        city
      }
    }
  }
`

export const ADD_BOOK = gql`
  mutation addBook ($input: bookInput!) {
    addBook (input: $input) {
      id
      title
    }
  }
`