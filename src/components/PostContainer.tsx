import { FunctionComponent, useState } from "react";
import { PostDetail } from "./PostDetail"
import { AllPosts } from "./AllPosts";

export const PostContainer: FunctionComponent = () => {

    const [postDetailID, setPostDetailID] = useState(1)

    const showPostDetail = (id: number) => {
        setPostDetailID(id)
    }

    return (
        <div className="columns">
            <div className="column">
                <h1 className="title is-3">All posts</h1>
                <AllPosts showPostDetail={showPostDetail} />
            </div>
            <div className="column is-4">
                <h1 className="title">Post detail</h1>
                <PostDetail id={postDetailID} />
            </div>
        </div>
    )
}