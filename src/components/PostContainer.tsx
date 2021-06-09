import React, { FunctionComponent, useState } from "react";
import { Row, Col, Typography } from "antd";

import { PostDetail } from "./PostDetail";
import { AllPosts } from "./AllPosts";

const PostDetailMemo = React.memo(
  PostDetail,
  (prevProps, nextProps) => prevProps.id === nextProps.id
);

export const PostContainer: FunctionComponent = () => {
  const [postDetailID, setPostDetailID] = useState(1);

  const showPostDetail = (id: number) => {
    setPostDetailID(id);
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
        <PostDetailMemo id={postDetailID} />
      </Col>
    </Row>
  );
};
