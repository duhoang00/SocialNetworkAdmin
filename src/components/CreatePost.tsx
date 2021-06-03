import { useMutation } from "@apollo/client"
import React, { FunctionComponent, useState } from "react"
import { CREATE_POST } from "../fetching/PostMutation"
import { CreatePostInput } from "../type/Post"

export const CreatePostForm: FunctionComponent = () => {
    const [input, setInput] = useState<CreatePostInput>()
    const [createPost, { data }] = useMutation(CREATE_POST);
    return (
        <>
            <h1 className="title is-3">Create a new post</h1>
            <div>
                <div className="">
                    <div className="field">
                        <label className="label">Title</label>
                        <textarea className="textarea" onChange={(e) => {
                            setInput(input => ({
                                title: e.target.value,
                                body: input?.body!
                            }))
                        }}></textarea>
                    </div>

                    <div className="field">
                        <label className="label">Body</label>
                        <textarea className="textarea" onChange={(e) => {
                            setInput(newPost => ({
                                title: input?.title!,
                                body: e.target.value
                            }))
                        }}></textarea>
                    </div>

                    <div className="field is-grouped is-grouped-multiline">
                        <div className="control">
                            <button className="button is-success" onClick={(e) => {
                                e.preventDefault()
                                console.log(input)
                                createPost({
                                    variables: {
                                        "input": input
                                    }
                                })
                                console.log(data)
                            }}>
                                Create
                            </button>
                        </div>
                        <div className="control">
                            <button className="button is-danger" type="reset">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}