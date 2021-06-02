import { FunctionComponent } from "react";
import { GET_ALL_POSTS } from "../query/PostQuery"
import { useAllPostsQuery } from "../request/PostRequest"

type ALlPostsProps = {
    showPostDetail: (id: number) => void
}

export const AllPosts: FunctionComponent<ALlPostsProps> = ({
    showPostDetail
}) => {
    const { loading, error, data } = useAllPostsQuery(GET_ALL_POSTS);

    if (loading) return <h1>Loading all posts...</h1>;
    if (error) return <h1>Something went wrong!</h1>;

    const allPostData = data.posts.data;

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {allPostData.map((post: any) => (
                        <tr key={post.id} onClick={() => showPostDetail(post.id)} style={{cursor: "pointer"}}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}