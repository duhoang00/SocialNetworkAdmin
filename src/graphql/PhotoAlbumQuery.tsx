import { gql, useQuery } from "@apollo/client";

const GET_PHOTO_ALBUM = gql`
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

const useGetPhotoAlbumQuery = (id: number) => {
  const { loading, error, data } = useQuery(GET_PHOTO_ALBUM, {
    variables: { id },
  });
  return { loading, error, data };
};

export default useGetPhotoAlbumQuery;
