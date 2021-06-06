import { useMutation } from "@apollo/client";
import React, { FunctionComponent, useState } from "react";
import { CREATE_POST } from "../fetching/PostMutation";
import { CreatePostInput } from "../type/Post";
import { Input, Button, Space } from "antd";

export const CreatePostForm: FunctionComponent = () => {
  const [input, setInput] = useState<CreatePostInput>();
  const [createPost, { data }] = useMutation(CREATE_POST);
  const { TextArea } = Input;

  return (
    <>
      <h1 className="title">Create a new post</h1>
      <label>Title</label>
      <TextArea
        className="textarea"
        onChange={(e) => {
          setInput((input) => ({
            input: {
              title: e.target.value,
              body: input?.input.body,
            },
          }));
        }}
      ></TextArea>

      <label>Body</label>
      <TextArea
        className="textarea"
        onChange={(e) => {
          setInput((newPost) => ({
            input: {
              title: input?.input.title,
              body: e.target.value,
            },
          }));
        }}
      ></TextArea>

      <br />
      <br />

      <Button
        type="primary"
        onClick={(e) => {
          e.preventDefault();
          console.log(input);
          createPost({
            variables: input,
          });
          console.log(data);
        }}
      >
        Create
      </Button>

      {/* <div className="">
                <div className="field">
                    <label className="label">Title</label>
                    <textarea className="textarea" onChange={(e) => {
                        setInput(input => ({
                            input: {
                                title: e.target.value,
                                body: input?.input.body 
                            }
                        }))
                    }}></textarea>
                </div>
 
                <div className="field">
                    <label className="label">Body</label>
                    <textarea className="textarea" onChange={(e) => {
                        setInput(newPost => ({
                            input: {
                                title: input?.input.title,
                                body: e.target.value
                            }
                        }))
                    }}></textarea>
                </div>

                <div className="field is-grouped is-grouped-multiline">
                    <div className="control">
                        <button className="button is-success" onClick={(e) => {
                            e.preventDefault()
                            console.log(input)
                            createPost({
                                variables: input
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
            </div> */}
    </>
  );
};
