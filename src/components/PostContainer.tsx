import { FunctionComponent, useState } from "react";
import { PostDetail } from "./PostDetail"
import { AllPosts } from "./AllPosts";

// type PostContainerProps = {
//     postDetailID: number
// }

export const PostContainer: FunctionComponent = ({
    // postDetailID
}) => {

    const [postDetailID, setPostDetailID] = useState(1)

    const showPostDetail = (id: number) => {
        console.log('get post detail ID = ' + id)
        setPostDetailID(id)
    }

    console.log("container = " + postDetailID)

    return (
        <div className="columns">
            <div className="column">
                <h1 className="title is-3">All lists</h1>
                <AllPosts showPostDetail={showPostDetail} />
            </div>
            <div className="column is-4">
                <h1 className="title">List detail</h1>
                <PostDetail id={postDetailID} />
            </div>
        </div>
    )
}