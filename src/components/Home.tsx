import { FunctionComponent } from "react";
import { Typography } from "antd";

export const Home: FunctionComponent = () => {
  const { Title } = Typography;

  return (
    <>
      <Title style={{ textAlign: "center" }}>Social Network Admin</Title>
    </>
  );
};
