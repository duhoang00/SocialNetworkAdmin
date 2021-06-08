import { FunctionComponent, useCallback, useState } from "react";
import { useGetUserQuery } from "../request/UserRequest";
import { GET_USER } from "../fetching/UserQuery";
import { Input, Row, Col, Typography, Spin } from "antd";

export const UserContainer: FunctionComponent = () => {
  const [queryID, setQueryID] = useState(1);
  const onSearchHandler = useCallback(
    (value) => {
      setQueryID(value);
    },
    [queryID]
  );
  const { loading, error, data } = useGetUserQuery(GET_USER, queryID);
  if (loading) return <Spin />;
  if (error) return <Spin />;

  const { Search } = Input;
  const { Title } = Typography;
  const userData = data?.user;
  const userDataAddress = userData.address;
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
            onSearch={onSearchHandler}
          />
        </Col>
        <Col span={24}>
          <Title level={5}>Username</Title>
          <Input defaultValue={userData.username} />
        </Col>
        <Col span={24}>
          <Title level={5}>Email</Title>
          <Input defaultValue={userData.email} />
        </Col>
        <Col span={24}>
          <Title level={5}>Lat</Title>
          <Input defaultValue={userDataAddress.geo.lat} />
        </Col>
        <Col span={24}>
          <Title level={5}>Lng</Title>
          <Input defaultValue={userDataAddress.geo.lng} />
        </Col>
      </Row>
    </>
  );
};
