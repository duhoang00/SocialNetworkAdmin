import { DocumentNode, useQuery, useMutation } from "@apollo/client"
import { IPost, IPostMutation } from "../type/Post"

export function usePostDetailQuery(gqlQuery: DocumentNode, id: number) {
  console.log("request = " + id)
  const { loading, error, data } = useQuery<{post: IPost}>(gqlQuery, {variables: {id}});
  return { loading, error, data };
}

export function useAllPostsQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery(gqlQuery);
  return { loading, error, data };
}

export function useAddPostMutation(gqlQuery: DocumentNode) {
    const [addPost] = useMutation<IPostMutation>(gqlQuery)
    return [addPost]
}