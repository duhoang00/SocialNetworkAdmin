import { FunctionComponent } from "react";
import { GET_POST_DETAIL } from "../query/PostQuery"
import { usePostDetailQuery } from "../request/PostRequest"


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