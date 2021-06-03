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

export function usePostDeleteQuery(gqlQuery: DocumentNode, id: number) {
  const { loading, error, data } = useQuery<{ deletePost: boolean }>(gqlQuery, { variables: { id } });
  return { loading, error, data };
}