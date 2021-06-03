import { gql } from '@apollo/client';

export const GET_POST_DETAIL = gql`
query (
  $id: ID!
) {
    post(id: $id) {
      id
      title
      body
    }
  }
`

export const GET_ALL_POSTS = gql`
query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
    }
    meta {
      totalCount
    }
  }
}
`

export const CREATE_POST = gql`
  mutation (
    $input: CreatePostInput!
  ) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`