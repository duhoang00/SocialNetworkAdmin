import { FunctionComponent, useState, useCallback } from "react";
import { useGetUserPostQuery } from "../request/UserRequest";
import { GET_USER_POST } from "../fetching/UserQuery";
import { Input, Row, Col, Typography, Divider, Spin } from "antd";

export const UserPost: FunctionComponent = () => {
  const [queryUserID, setQueryUserID] = useState(1);
  const onSearchHandler = useCallback(
    (value) => {
      setQueryUserID(value);
    },
    [queryUserID]
  );
  const { loading, error, data } = useGetUserPostQuery(
    GET_USER_POST,
    queryUserID
  );
  if (loading || error) {
    return <Spin />;
  }
  const { Search } = Input;
  const { Title } = Typography;
  const renderData = data.user.posts.data;
  return (
    <>
      <Title>User's post</Title>
      <Title level={5}>User ID</Title>

      <Search
        defaultValue={queryUserID}
        allowClear
        enterButton="Search"
        onSearch={onSearchHandler}
      />
      <Divider orientation="center">User's post detail</Divider>
      {renderData.map((post: any) => (
        <Row key={post.id} gutter={16}>
          <Col span={2}>
            <Title level={5}>ID</Title>
            <Input defaultValue={post.id} />
          </Col>
          <Col span={22}>
            <Title level={5}>Title</Title>
            <Input defaultValue={post.title} />
          </Col>
        </Row>
      ))}
    </>
  );
};
