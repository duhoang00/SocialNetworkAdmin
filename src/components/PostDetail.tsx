import { FunctionComponent, useState } from "react";
import { GET_POST_DETAIL } from "../fetching/PostQuery";
import { usePostDetailQuery } from "../request/PostRequest";
import { useMutation } from "@apollo/client";
import { DELETE_POST, UPDATE_POST } from "../fetching/PostMutation";
import { UpdatePostInput } from "../type/Post";
import { Input, Button, Row, Col, Spin } from "antd";
import Title from "antd/lib/typography/Title";
import { render } from "@testing-library/react";

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

  if (loading) return <Spin />;
  if (error) return <Spin />;
  const renderData = data.post;
  const { TextArea } = Input;
  return (
    <>
      <Row gutter={[16, 16]} key={renderData.id}>
        <Col span={24}>
          <Title level={5}>ID</Title>
          <Input type="text" defaultValue={renderData.id} />
        </Col>

        <Col span={24}>
          <Title level={5}>Title</Title>
          <TextArea defaultValue={renderData.title} />
        </Col>

        <Col span={24}>
          <Title level={5}>Body</Title>
          <TextArea
            defaultValue={renderData.body}
            rows={5}
            onChange={(e) => {
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
              deletePost({
                variables: { id: renderData.id },
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
