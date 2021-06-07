import { FunctionComponent, useState } from "react";
import { GET_POST_DETAIL } from "../fetching/PostQuery";
import { usePostDetailQuery } from "../request/PostRequest";
import { useMutation } from "@apollo/client";
import { DELETE_POST, UPDATE_POST } from "../fetching/PostMutation";
import { UpdatePostInput } from "../type/Post";
import { Input, Button, Row, Col } from "antd";
import Title from "antd/lib/typography/Title";

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
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={5}>ID</Title>
          <Input type="text" defaultValue={data?.post.id} />
        </Col>

        <Col span={24}>
        <Title level={5}>Title</Title>
          <TextArea defaultValue={data?.post.title} />
        </Col>

        <Col span={24}>
        <Title level={5}>Body</Title>
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
        </Col>

        <Col span={12}>
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
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>
    </>
  );
};
