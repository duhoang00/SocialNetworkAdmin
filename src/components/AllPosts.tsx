import { FunctionComponent, useState } from "react";
import { GET_ALL_POSTS } from "../fetching/PostQuery";
import { useAllPostsQuery } from "../request/PostRequest";
import { PageQueryOptions } from "../type/Post";
import { Table, Spin } from "antd";

type ALlPostsProps = {
  showPostDetail: (id: number) => void;
};

const pageQueryOptions = (page: number, limit: number) => {
  const optionsReturn: PageQueryOptions = {
    options: {
      paginate: {
        page: page,
        limit: limit,
      },
    },
  };
  return optionsReturn;
};

export const AllPosts: FunctionComponent<ALlPostsProps> = ({
  showPostDetail,
}) => {
  const { loading, error, data } = useAllPostsQuery(
    GET_ALL_POSTS,
    pageQueryOptions(1, 10)
  );
  if (loading) return <Spin />;
  if (error) return  <Spin />;

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
