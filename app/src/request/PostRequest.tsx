import { DocumentNode, useQuery } from "@apollo/client"
import { IPost } from "../type/Post"

export function usePostDetailQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<{post: IPost}>(gqlQuery);
  return { loading, error, data };
}