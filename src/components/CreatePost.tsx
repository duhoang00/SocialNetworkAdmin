import { FunctionComponent, useState } from "react";
import { useMutation } from "@apollo/client";
import { Input, Button, Row, Col, Typography } from "antd";

import useCreatePostMutation from "../graphql/CreatePostMutation";

export const CreatePostForm: FunctionComponent = () => {
  const [input, setInput] = useState<{ title: string; body: string }>();
  const [createPost] = useCreatePostMutation();

  const { TextArea } = Input;
  const { Title } = Typography;

  return (
    <>
      <Title>Create a new post</Title>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={5}>Title</Title>
          <TextArea
            className="textarea"
            onChange={(e) => {
              setInput((input) => ({
                title: e.target.value,
                body: input?.body,
              }));
            }}
          ></TextArea>
        </Col>

        <Col span={24}>
          <Title level={5}>Body</Title>
          <TextArea
            className="textarea"
            onChange={(e) => {
              setInput((newPost) => ({
                title: input?.title,
                body: e.target.value,
              }));
            }}
          ></TextArea>
        </Col>

        <Col>
          <Button
            type="primary"
            onClick={(e) => {
              createPost(input);
            }}
          >
            Create
          </Button>
        </Col>
      </Row>
    </>
  );
};
