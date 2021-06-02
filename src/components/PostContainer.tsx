import { FunctionComponent } from "react";
import { PostDetail } from "./PostDetail"
import { AllPosts } from "./AllPosts";

type PostContainerProps = {
    postDetailID: number
}

export const PostContainer: FunctionComponent<PostContainerProps> = ({
    postDetailID
}) => {

    const showPostDetail = (id: number) => {
        postDetailID = id;
    }

    console.log("container = " + postDetailID)

    return (
        <div className="columns">
            <div className="column">
                <AllPosts showPostDetail={showPostDetail} />
            </div>
            <div className="column is-2">
                <PostDetail id={postDetailID} />
            </div>
        </div>
    )
}