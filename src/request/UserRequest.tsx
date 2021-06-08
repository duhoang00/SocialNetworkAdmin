import { DocumentNode, useQuery } from "@apollo/client";

import { User } from "../type/User";

export function useGetUserQuery(gqlQuery: DocumentNode, id: number) {
  const { loading, error, data } = useQuery<{ user: User }>(gqlQuery, {
    variables: { id },
  });
  return { loading, error, data };
}

export function useGetUserPostQuery(gqlQuery: DocumentNode, id: number) {
  const { loading, error, data } = useQuery(gqlQuery, { variables: { id } });
  return { loading, error, data };
}
