import { FunctionComponent } from "react";
import { PostDetail } from "./PostDetail"
import { AllPosts } from "./AllPosts";


export const PostContainer: FunctionComponent = () => {
    console.log('run post container')
    return (
        <div className="columns">
            <div className="column">
                <AllPosts />
            </div>
            <div className="column is-2">
                <PostDetail />
            </div>
        </div>
    )
}