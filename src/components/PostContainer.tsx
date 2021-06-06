import { FunctionComponent, useState } from "react";
import { PostDetail } from "./PostDetail";
import { AllPosts } from "./AllPosts";
import { Row, Col } from "antd";

export const PostContainer: FunctionComponent = () => {
  const [postDetailID, setPostDetailID] = useState(1);

  const showPostDetail = (id: number) => {
    setPostDetailID(id);
  };

  return (
    <Row>
      <Col flex={2}>
        <h1 className="title">All posts</h1>
        <AllPosts showPostDetail={showPostDetail} />
      </Col>
      <Col flex={3}>
        <h1 className="title">Post detail</h1>
        <PostDetail id={postDetailID} />
      </Col>
    </Row>

    // <div className="columns">
    //     <div className="column">
    //         <h1 className="title is-3">All posts</h1>
    //         <AllPosts showPostDetail={showPostDetail} />
    //     </div>
    //     <div className="column is-4">
    //         <h1 className="title">Post detail</h1>
    //         <PostDetail id={postDetailID} />
    //     </div>
    // </div>
  );
};
