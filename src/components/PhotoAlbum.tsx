import { FunctionComponent, useCallback, useMemo, useState } from "react";
import { useGetPhotoAlbumQuery } from "../request/MediaRequest";
import { GET_PHOTO_ALBUM } from "../fetching/MediaQuery";
import { Input, Typography, Row, Col, Spin } from "antd";

export const PhotoAlbum: FunctionComponent = () => {
  const [queryID, setQueryID] = useState(1);

  const { loading, error, data } = useGetPhotoAlbumQuery(
    GET_PHOTO_ALBUM,
    queryID
  );
  if (loading) return <Spin />
  if (error) return <Spin />

  const renderData = data.photo.album;
  const { Search } = Input;
  const { Title } = Typography;

  const onSearch = (value) => {
    setQueryID(value);
  };


  // const onSearchHandler = (value) = useCallback(() => {
  //   setQueryID(value)
  // }, [value])

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
            onSearch={onSearch}
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
