import { FunctionComponent } from "react";
import { GET_POST_DETAIL, GET_ALL_POSTS } from "../query/PostQuery"
import { usePostDetailQuery, useAllPostsQuery } from "../request/PostRequest"


export const PostDetail: FunctionComponent = () => {
    const { loading, error, data } = usePostDetailQuery(GET_POST_DETAIL);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;

    console.log(data)
    
    return (
        <div>
            {data?.post.id}
        </div>
    )
}

export const AllPosts: FunctionComponent = () => {
    const { loading, error, data } = useAllPostsQuery(GET_ALL_POSTS);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;

    return (
        <></>
    )
}