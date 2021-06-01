import { FunctionComponent } from "react";
import { GET_ALL_POSTS } from "../query/PostQuery"
import { useAllPostsQuery } from "../request/PostRequest"

export const AllPosts: FunctionComponent = () => {
    const { loading, error, data } = useAllPostsQuery(GET_ALL_POSTS);

    if (loading) return <h1>Loading all posts...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    console.log(data?.allPosts)
    return (
        <>
            
        </>
    )
}