import { DocumentNode, useQuery } from "@apollo/client"
import { IPost, IPosts } from "../type/Post"

export function usePostDetailQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<{post: IPost}>(gqlQuery);
  return { loading, error, data };
}

export function useAllPostsQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<{posts: IPosts}>(gqlQuery);
  return { loading, error, data };
}