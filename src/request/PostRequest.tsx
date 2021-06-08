import { DocumentNode, useQuery } from "@apollo/client";

import { Post, PageQueryOptions } from "../type/Post";

export function usePostDetailQuery(gqlQuery: DocumentNode, id: number) {
  const { loading, error, data } = useQuery<{ post: Post }>(gqlQuery, {
    variables: { id },
  });
  return { loading, error, data };
}

export function useAllPostsQuery(
  gqlQuery: DocumentNode,
  options: PageQueryOptions
) {
  const { loading, error, data } = useQuery(gqlQuery, { variables: options });
  return { loading, error, data };
}
