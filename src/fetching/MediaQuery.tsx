import { gql } from "@apollo/client";

export const GET_PHOTO_ALBUM = gql`
  query ($id: ID!) {
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
`;
