import { FunctionComponent } from "react";
import { PostDetail } from "./PostDetail"


export const PostContainer: FunctionComponent = () => {
    console.log('run post container')
    return (
        <PostDetail />
    )
}