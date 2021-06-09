import { gql, useQuery } from "@apollo/client";

const GET_USER_POST = gql`
  query ($id: ID!) {
    user(id: $id) {
      posts {
        data {
          id
          title
        }
      }
    }
  }
`;

const useGetUserPostQuery = (id: number) => {
  const { loading, error, data } = useQuery(GET_USER_POST, {
    variables: { id: id },
  });
  return { loading, error, data };
};

export default useGetUserPostQuery;
