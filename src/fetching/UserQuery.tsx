import { gql } from '@apollo/client';

export const GET_USER = gql`
query (
  $id: ID!
){
    user(id: $id) {
      id
      username
      email
      address {
        geo {
          lat
          lng
        }
      }
    }
  }
`

export const GET_USER_POST = gql`
query (
  $id: ID!
) {
    user(id: $id) {
      posts {
        data {
          id
          title
        }
      }
    }
  }
`

export const GET_PHOTO_ALBUM = gql`
query (
    $id: ID!
  ) {
    photo(id: $id) {
      album {
        id
        title
        user {
          id
        }
      }
    }
  }
`