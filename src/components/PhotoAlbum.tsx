import { FunctionComponent, useCallback, useMemo, useState } from "react";
import { Input, Typography, Row, Col, Spin } from "antd";

import useGetPhotoAlbumQuery from "../graphql/PhotoAlbumQuery";

export const PhotoAlbum: FunctionComponent = () => {
  const [queryID, setQueryID] = useState(1);
  const onSearchHandler = useCallback(
    (value) => {
      setQueryID(value);
    },
    [queryID]
  );
  const { loading, error, data } = useGetPhotoAlbumQuery(queryID);
  if (loading || error) {
    return <Spin />;
  }

  const renderData = data.photo.album;
  const { Search } = Input;
  const { Title } = Typography;

  return (
    <>
      <Title>Photo album information</Title>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={5}>ID</Title>
          <Search
            defaultValue={queryID}
            allowClear
            enterButton="Search"
            onSearch={onSearchHandler}
          />
        </Col>
        <Col span={24}>
          <Title level={5}>Title</Title>
          <Input defaultValue={renderData.title} />
        </Col>
        <Col span={24}>
          <Title level={5}>User ID</Title>
          <Input defaultValue={renderData.user.id} />
        </Col>
      </Row>
    </>
  );
};
