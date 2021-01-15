import gql from 'graphql-tag'

export const ADD_AUTHOR = gql`
  mutation addAuthor ($input: authorInput!) {
    addAuthor (input: $input) {
      id
      firstName
      lastName
    }
  }
`