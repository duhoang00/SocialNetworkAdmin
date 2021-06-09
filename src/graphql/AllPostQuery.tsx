import { DocumentNode, gql, useQuery } from "@apollo/client";

// interface PageQueryOptions {
//   paginate: {
//     page: number;
//     limit: number;
//   };
// }

const GET_ALL_POSTS = gql`
  query ($options: PageQueryOptions) {
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
`;

function useAllPostsQuery(options: { page: number; limit: number }) {
  const { loading, error, data } = useQuery(GET_ALL_POSTS, {
    variables: options,
  });
  return { loading, error, data };
}

export default useAllPostsQuery;
