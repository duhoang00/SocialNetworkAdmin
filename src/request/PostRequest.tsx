import { DocumentNode, useQuery, useMutation } from "@apollo/client"
import { IPost, IPostMutation } from "../type/Post"

export function usePostDetailQuery(gqlQuery: DocumentNode, id: number) {
  // console.log("request = " + id)
  const { loading, error, data } = useQuery<{post: IPost}>(gqlQuery, {variables: {id}});
  return { loading, error, data };
}

export function useAllPostsQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery(gqlQuery);
  return { loading, error, data };
}

export function useCreatePostMutation(gqlQuery: DocumentNode) {
    const [createPost] = useMutation<IPostMutation>(gqlQuery)
    return [createPost]
}