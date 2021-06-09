import { gql, useQuery } from "@apollo/client";

interface Post {
  id: number;
  title: string;
  body: string;
}

const GET_POST_DETAIL = gql`
  query ($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;

const usePostDetailQuery = (id: number) => {
  const { loading, error, data } = useQuery<{ post: Post }>(GET_POST_DETAIL, {
    variables: { id },
  });
  return { loading, error, data };
};

export default usePostDetailQuery;
