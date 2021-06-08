import { FunctionComponent, useState } from "react";
import { useMutation } from "@apollo/client";
import { Input, Button, Row, Col, Typography } from "antd";

import { CREATE_POST } from "../fetching/PostMutation";
import { CreatePostInput } from "../type/Post";

export const CreatePostForm: FunctionComponent = () => {
  const [input, setInput] = useState<CreatePostInput>();
  const [createPost, { data }] = useMutation(CREATE_POST);
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
                input: {
                  title: e.target.value,
                  body: input?.input.body,
                },
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
                input: {
                  title: input?.input.title,
                  body: e.target.value,
                },
              }));
            }}
          ></TextArea>
        </Col>

        <Col>
          <Button
            type="primary"
            onClick={(e) => {
              createPost({
                variables: input,
              });
            }}
          >
            Create
          </Button>
        </Col>
      </Row>
    </>
  );
};
