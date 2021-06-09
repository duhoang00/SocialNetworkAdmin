import { FunctionComponent, useState } from "react";
import { useMutation } from "@apollo/client";
import { Input, Button, Row, Col, Spin } from "antd";
import { Typography } from "antd";

import { DELETE_POST } from "../fetching/PostMutation";
// import { UpdatePostInput } from "../type/Post";

import usePostDetailQuery from "../graphql/PostDetailQuery";
import useUpdatePostMutation from "../graphql/UpdatePostMutation";

type PostDetailProps = {
  id: number;
};

export const PostDetail: FunctionComponent<PostDetailProps> = ({ id }) => {
  const [deletePost, deleteStatus] = useMutation(DELETE_POST);

  // const [updatePost, updateStatus] = useMutation(UPDATE_POST);

  const { loading, error, data } = usePostDetailQuery(id);
  const [newPostContent, setNewPostContent] = useState("");

  const [updatePost, { loading: isUpdatingPost }] = useUpdatePostMutation();

  if (loading) return <Spin />;
  if (error) return <Spin />;
  const renderData = data.post;
  const { TextArea } = Input;
  const { Title } = Typography;
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
              setNewPostContent(e.target.value);
            }}
          />
        </Col>

        <Col span={12}>
          <Button
            type="primary"
            onClick={(e) => {
              updatePost({
                id: id,
                input: {
                  body: newPostContent,
                },
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
