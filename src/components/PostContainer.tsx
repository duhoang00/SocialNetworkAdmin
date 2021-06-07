import { FunctionComponent, useState } from "react";
import { PostDetail } from "./PostDetail";
import { AllPosts } from "./AllPosts";
import { Row, Col, Typography } from "antd";

export const PostContainer: FunctionComponent = () => {
  const [postDetailID, setPostDetailID] = useState(1);

  const showPostDetail = (id: number) => {
    setPostDetailID(id)
  };

  const { Title } = Typography;

  return (
    <Row justify="space-around">
      <Col span={8}>
        <Title className="title">All posts</Title>
        <AllPosts showPostDetail={showPostDetail} />
      </Col>
      <Col span={8}>
        <Title className="title">Post detail</Title>
        <PostDetail id={postDetailID} />
      </Col>
    </Row>
  );
};
