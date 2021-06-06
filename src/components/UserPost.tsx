import { FunctionComponent, useState } from "react";
import { useGetUserPostQuery } from "../request/UserRequest";
import { GET_USER_POST } from "../fetching/UserQuery";
import { Input, Row, Col, Space } from "antd";

export const UserPost: FunctionComponent = () => {
  const [userDetailID, setUserDetailID] = useState(1);
  const [queryUserID, setQueryUserID] = useState(1);

  const { loading, error, data } = useGetUserPostQuery(
    GET_USER_POST,
    queryUserID
  );
  if (loading) return <h1>Loading post detail...</h1>;
  if (error) return <h1>Something went wrong</h1>;
  const { Search } = Input;
  const onSearch = (value) => {
    setQueryUserID(value);
  };
  const renderData = data.user.posts.data;
  return (
    <>
      <h1 className="title is-3">User's post</h1>
      <label className="label">User ID</label>

      <Search
        defaultValue={queryUserID}
        allowClear
        enterButton="Search"
        onSearch={onSearch}
      />
      <br />
      <br />
      {renderData.map((post: any) => (
        <Row key={post.id} gutter={16}>
          <Col span={2}>
            <label>ID</label>
            <Input defaultValue={post.id} />
          </Col>
          <Col span={22}>
            <label>Title</label>
            <Input defaultValue={post.title} />
          </Col>
        </Row>
      ))}
      {/* <div className="">
                <label className="label">User ID</label>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" defaultValue={queryUserID} type="number" onChange={(e) => { setUserDetailID(parseInt(e.target.value)) }} />
                    </div>
                    <div className="control">
                        <button className="button is-success" onClick={(e) => { setQueryUserID(userDetailID); }} >Check</button>
                    </div>
                </div>

                {renderData.map((post: any) =>
                    <div className="columns" key={post.id}>
                        <div className="column is-1">
                            <label className="label">ID</label>
                            <input className="input" defaultValue={post.id} />
                        </div>
                        <div className="column">
                            <label className="label">Title</label>
                            <input className="input" defaultValue={post.title} />
                        </div>
                    </div>
                )}
            </div> */}
    </>
  );
};
