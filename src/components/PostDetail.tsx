import { FunctionComponent, useState } from "react";
import { IPost } from "../type/Post"
import { GET_POST_DETAIL, ADD_POST } from "../query/PostQuery"
import { usePostDetailQuery, useAddPostMutation } from "../request/PostRequest"

type PostDetailProps = {
    id: number
}

export const PostDetail: FunctionComponent<PostDetailProps> = ({ id }) => {
    const [postDetail, setPostDetail] = useState<IPost>();
    const { loading, error, data } = usePostDetailQuery(GET_POST_DETAIL, id);
    if (loading) return <h1>Loading post detail...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    if (data?.post.id !== postDetail?.id) {
        setPostDetail(data?.post)
    }

    const addPost = () => {
        console.log(postDetail)
    }

    return (
        <form className="form">
            <div className="field" key={postDetail?.id}>
                <div className="field">
                    <label className="label">ID</label>
                    <div className="control">
                        <input className="input" type="text" defaultValue={postDetail?.id} onChange={(e) => {
                            setPostDetail({ id: parseInt(e.target.value), title: postDetail?.title!, body: postDetail?.body! })
                        }} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Textarea" defaultValue={postDetail?.title} onChange={(e) => {
                            setPostDetail({ id: postDetail?.id!, title: e.target.value, body: postDetail?.body! })
                        }}></textarea>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Body</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Textarea" defaultValue={postDetail?.body} rows={10} onChange={(e) => {
                            setPostDetail({ id: postDetail?.id!, title: postDetail?.title!, body: e.target.value })
                        }}></textarea>
                    </div>
                </div>
            </div>
            <div className="field is-grouped is-grouped-multiline">
                <div className="control">
                    <button className="button is-success" onClick={(e) => {
                        addPost()
                    }}>Create</button>
                </div>
                <div className="control">
                    <button className="button is-info">Update</button>
                </div>
                <div className="control">
                    <button className="button is-danger">Delete</button>
                </div>
            </div>
        </form>
    )
}