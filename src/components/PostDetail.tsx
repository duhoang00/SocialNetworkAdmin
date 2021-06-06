import { FunctionComponent, useState } from "react";
import { GET_POST_DETAIL } from "../fetching/PostQuery";
import { usePostDetailQuery } from "../request/PostRequest";
import { useMutation } from "@apollo/client";
import { DELETE_POST, UPDATE_POST } from "../fetching/PostMutation";
import { UpdatePostInput } from "../type/Post";
import { Input, Button, Space } from "antd";

type PostDetailProps = {
  id: number;
};

export const PostDetail: FunctionComponent<PostDetailProps> = ({ id }) => {
  const [deletePost, deleteStatus] = useMutation(DELETE_POST);

  const [updatePost, updateStatus] = useMutation(UPDATE_POST);

  const { loading, error, data } = usePostDetailQuery(GET_POST_DETAIL, id);
  const [newPostContent, setNewPostContent] = useState<UpdatePostInput>({
    id: id,
    input: { body: data?.post.body },
  });

  if (loading) return <h1>Loading post detail...</h1>;
  if (error) return <h1>Something went wrong</h1>;

  const { TextArea } = Input;

  return (
    <>
      <Input type="text" defaultValue={data?.post.id} />
      <br />
      <br />
      <TextArea defaultValue={data?.post.title} />
      <br />
      <br />
      <TextArea
        defaultValue={data?.post.body}
        rows={5}
        onChange={(e) => {
          e.preventDefault();
          setNewPostContent((newPostContent) => ({
            id: newPostContent.id,
            input: {
              body: e.target.value,
            },
          }));
        }}
      />
      <br />
      <br />
      <Space>
        <Button
          type="primary"
          onClick={(e) => {
            e.preventDefault();
            updatePost({
              variables: newPostContent,
            });
          }}
        >
          Update
        </Button>
        <Button
          type="primary"
          onClick={(e) => {
            e.preventDefault();
            deletePost({
              variables: { id: data?.post.id },
            });
          }}
        >
          Delete
        </Button>
      </Space>
    </>

    // <div className="form">
    //   <div className="field" key={data?.post.id}>
    //     <div className="field">
    //       <label className="label">ID</label>
    //       <div className="control">
    //         <Input className="input" type="text" defaultValue={data?.post.id} />
    //       </div>
    //     </div>
    //     <div className="field">
    //       <label className="label">Title</label>
    //       <div className="control">
    //         <TextArea
    //           className="textarea"
    //           placeholder="Textarea"
    //           defaultValue={data?.post.title}
    //         />
    //       </div>
    //     </div>
    //     <div className="field">
    //       <label className="label">Body</label>
    //       <div className="control">
    //         <TextArea
    //           className="textarea"
    //           placeholder="Textarea"
    //           defaultValue={data?.post.body}
    //           rows={5}
    //           onChange={(e) => {
    //             e.preventDefault();
    //             setNewPostContent((newPostContent) => ({
    //               id: newPostContent.id,
    //               input: {
    //                 body: e.target.value,
    //               },
    //             }));
    //           }}
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="field is-grouped is-grouped-multiline">
    //     <div className="control">
    //       <Button type="primary"
    //         onClick={(e) => {
    //           e.preventDefault();
    //           updatePost({
    //             variables: newPostContent,
    //           });
    //         }}
    //       >
    //         Update
    //       </Button>
    //     </div>
    //     <div className="control">
    //       <Button type="primary"
    //         onClick={(e) => {
    //           e.preventDefault();
    //           deletePost({
    //             variables: { id: data?.post.id },
    //           });
    //         }}
    //       >
    //         Delete
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
};
