import { gql, useQuery } from "@apollo/client";

interface User {
  id: number;
  username: string;
  email: string;
  address: {
    geo: {
      lat: number;
      lng: number;
    };
  };
}

const GET_USER = gql`
  query ($id: ID!) {
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
`;

const useGetUserDetailQuery = (id: number) => {
  const { loading, error, data } = useQuery<{ user: User }>(GET_USER, {
    variables: { id },
  });
  return { loading, error, data };
};

export default useGetUserDetailQuery;
