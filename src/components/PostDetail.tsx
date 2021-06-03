import { FunctionComponent } from "react";
import { GET_POST_DETAIL } from "../fetching/PostQuery"
import { usePostDetailQuery, usePostDeleteQuery } from "../request/PostRequest"
import { useMutation } from "@apollo/client"
import { DELETE_POST } from "../fetching/PostMutation";

type PostDetailProps = {
    id: number
}

export const PostDetail: FunctionComponent<PostDetailProps> = ({ id }) => {
    const [deletePost, deleteStatus ] = useMutation(DELETE_POST)
    const { loading, error, data } = usePostDetailQuery(GET_POST_DETAIL, id);
    if (loading) return <h1>Loading post detail...</h1>;
    if (error) return <h1>Something went wrong!</h1>;

    return (
        <div className="form">
            <div className="field" key={data?.post.id}>
                <div className="field">
                    <label className="label">ID</label>
                    <div className="control">
                        <input className="input" type="text" defaultValue={data?.post.id} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Textarea" defaultValue={data?.post.title} ></textarea>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Body</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Textarea" defaultValue={data?.post.body} rows={10} ></textarea>
                    </div>
                </div>
            </div>
            <div className="field is-grouped is-grouped-multiline">
                <div className="control">
                    <button className="button is-info">Update</button>
                </div>
                <div className="control">
                    <button className="button is-danger" onClick={(e) => {
                        e.preventDefault()
                        
                        deletePost({
                            variables: {"id": data?.post.id}
                        })
                    }}>Delete</button>
                </div>
            </div>
        </div>
    )
}