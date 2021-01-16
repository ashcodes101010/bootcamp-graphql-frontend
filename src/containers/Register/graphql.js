import gql from 'graphql-tag'

export const REGISTER = gql`
  mutation register ($user: RegisterInput!) {
    register (input: $user) {
      token
    }
  }
`