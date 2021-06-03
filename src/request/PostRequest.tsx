import { DocumentNode, useQuery } from "@apollo/client"
import { IPost } from "../type/Post"

export function usePostDetailQuery(gqlQuery: DocumentNode, id: number) {
  const { loading, error, data } = useQuery<{ post: IPost }>(gqlQuery, { variables: { id } });
  return { loading, error, data };
}

export function useAllPostsQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery(gqlQuery);
  return { loading, error, data };
}

// // CAN NOT DO IT??
// export function useCreatePostMutation(gqlQuery: DocumentNode) {
//   const [createPost, { data }] = useMutation(gqlQuery);
//   return [createPost, { data }]
// }