import { FunctionComponent, useState } from "react"
import { IPost } from "../type/Post"

export const CreatePostForm: FunctionComponent = () => {
    const [post, setPost] = useState<IPost>()
    return (
        <>
            <h1 className="title is-3">Create a new post</h1>
            <div>
                <form className="">
                    <div className="field">
                        <label className="label">ID</label>
                        <input className="input" type="number" onChange={(e) => {
                            setPost({
                                id: parseInt(e.target.value!),
                                title: post?.title!,
                                body: post?.body!
                            })
                        }} />
                    </div>

                    <div className="field">
                        <label className="label">Title</label>
                        <input className="input" type="text" onChange={(e) => {
                            setPost({
                                id: parseInt(post?.body!),
                                title: e.target.value,
                                body: post?.body!
                            })
                        }} />
                    </div>

                    <div className="field">
                        <label className="label">Body</label>
                        <input className="input" type="text" onChange={(e) => {
                            setPost({
                                id: parseInt(e.target.value!),
                                title: post?.title!,
                                body: e.target.value,
                            })
                        }} />
                    </div>

                    <div className="field is-grouped is-grouped-multiline">
                        <div className="control">
                            <button className="button is-success" type="submit">
                                Create
                            </button>
                        </div>
                        <div className="control">
                            <button className="button is-danger" type="submit">
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}