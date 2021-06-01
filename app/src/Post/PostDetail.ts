import React, { FunctionComponent } from 'react'
import { Post } from "./PostType"
import { GET_A_POST } from "./PostQuery"
import { useGetAPostQuery } from "./PostRequest"

type PostDetailProps = {
    post: Post;
}

export const PostDetail: FunctionComponent<PostDetailProps> = ({ post }) => {
    const { loading, error, data } = useGetAPostQuery(GET_A_POST);

    if (loading) return <h2></h2>
}