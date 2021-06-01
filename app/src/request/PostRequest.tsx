import { DocumentNode, useQuery } from "@apollo/client"
import { IPost, IAllPosts } from "../type/Post"

export function usePostDetailQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<{post: IPost}>(gqlQuery);
  return { loading, error, data };
}

export function useAllPostsQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<{allPosts: IAllPosts}>(gqlQuery);
  return { loading, error, data };
}