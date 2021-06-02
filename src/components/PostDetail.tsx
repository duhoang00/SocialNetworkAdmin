import { FunctionComponent } from "react";
import { GET_POST_DETAIL } from "../query/PostQuery"
import { usePostDetailQuery } from "../request/PostRequest"

type PostDetailProps = {
    id: number
}

export const PostDetail: FunctionComponent<PostDetailProps> = ({id}) => {
    console.log("detail = " + id)
    const { loading, error, data } = usePostDetailQuery(GET_POST_DETAIL, id);

    if (loading) return <h1>Loading post detail...</h1>;
    if (error) return <h1>Something went wrong!</h1>;

    return (
        <div>
            {data?.post.body}
        </div>
    )
}