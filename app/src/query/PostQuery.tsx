import { gql } from '@apollo/client';

export const GET_POST_DETAIL = gql`
query {
    post(id: 1) {
      id
      title
      body
    }
  }
`