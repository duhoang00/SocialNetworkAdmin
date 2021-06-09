import { FunctionComponent } from "react";
import { Table, Spin } from "antd";

import useAllPostsQuery from "../graphql/AllPostQuery";

type ALlPostsProps = {
  showPostDetail: (id: number) => void;
};
export const AllPosts: FunctionComponent<ALlPostsProps> = ({
  showPostDetail,
}) => {
  const { loading, error, data } = useAllPostsQuery({
    page: 1,
    limit: 10,
  });

  if (loading || error) {
    return <Spin />;
  }

  const allPostData = data.posts.data.map((post) => ({
    ...post,
    key: post.id,
  }));

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
  ];

  return (
    <>
      <Table
        dataSource={allPostData}
        columns={columns}
        onRow={(record, index) => {
          return {
            onClick: (event) => {
              showPostDetail(record.id);
            },
          };
        }}
        style={{ cursor: "pointer" }}
      ></Table>
    </>
  );
};
