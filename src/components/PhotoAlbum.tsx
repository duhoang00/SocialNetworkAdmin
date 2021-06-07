import { FunctionComponent, useState } from "react";
import { useGetPhotoAlbumQuery } from "../request/MediaRequest";
import { GET_PHOTO_ALBUM } from "../fetching/MediaQuery";
import { Input, Typography, Row, Col } from "antd";

export const PhotoAlbum: FunctionComponent = () => {
  const [queryID, setQueryID] = useState(1);

  const { loading, error, data } = useGetPhotoAlbumQuery(
    GET_PHOTO_ALBUM,
    queryID
  );
  if (loading) return <h1>Loading post detail...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  const renderData = data.photo.album;
  const { Search } = Input;
  const { Title } = Typography;
  const onSearch = (value) => {
    setQueryID(value);
  };

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
