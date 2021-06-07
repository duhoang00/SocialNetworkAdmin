import { FunctionComponent, useState } from "react";
import { useGetUserQuery } from "../request/UserRequest";
import { GET_USER } from "../fetching/UserQuery";
import { Input, Row, Col, Typography } from "antd";

export const UserContainer: FunctionComponent = () => {
  const [userDetailID, setUserDetailID] = useState(1);
  const [queryID, setQueryID] = useState(1);

  const { loading, error, data } = useGetUserQuery(GET_USER, queryID);
  if (loading) return <h1>Loading post detail...</h1>;
  if (error) return <h1>Something went wrong</h1>;

  const { Search } = Input;
  const { Title } = Typography;
  const onSearch = (value) => {
    setQueryID(value);
  };

  return (
    <>
      <Title>User information</Title>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={5}>ID</Title>
          <Search
            defaultValue={data.user.id}
            allowClear
            enterButton="Search"
            onSearch={onSearch}
          />
        </Col>
        <Col span={24}>
          <Title level={5}>Username</Title>
          <Input defaultValue={data?.user.username} />
        </Col>
        <Col span={24}>
          <Title level={5}>Email</Title>
          <Input defaultValue={data?.user.email} />
        </Col>
        <Col span={24}>
          <Title level={5}>Lat</Title>
          <Input defaultValue={data?.user.address.geo.lat} />
        </Col>
        <Col span={24}>
          <Title level={5}>Lng</Title>
          <Input defaultValue={data?.user.address.geo.lng} />
        </Col>
      </Row>
    </>
  );
};
