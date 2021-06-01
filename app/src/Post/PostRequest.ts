import { DocumentNode, useQuery, useMutation } from "@apollo/react-hooks";
import { Post } from './PostType'

export function useGetAPostQuery(gqlQuery: DocumentNode) {
    const { loading, error, data } = useQuery<({ post: Post })>(gqlQuery)
    return { loading, error, data }
}