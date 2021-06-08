import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  FileOutlined,
  HomeOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { PostContainer } from "./components/PostContainer";
import { UserContainer } from "./components/UserContainer";
import { CreatePostForm } from "./components/CreatePost";
import { UserPost } from "./components/UserPost";
import { PhotoAlbum } from "./components/PhotoAlbum";
import { Home } from "./components/Home";

function App() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider, Footer } = Layout;

  const [siderCollapsed, setSiderCollapsed] = useState(false);

  const onCollapse = () => {
    setSiderCollapsed(!siderCollapsed);
  };

  return (
    <>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            theme="light"
            collapsible
            collapsed={siderCollapsed}
            onCollapse={onCollapse}
          >
            <div className="sider-logo" />
            <Menu theme="light" defaultSelectedKeys={["home"]} mode="inline">
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/Home">Home</Link>
              </Menu.Item>

              <SubMenu key="post" icon={<FileOutlined />} title="Post">
                <Menu.Item key="checkPost">
                  <Link to="/Post">Check post</Link>
                </Menu.Item>
                <Menu.Item key="createPost">
                  <Link to="/CreatePost">Create post</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="user" icon={<UserOutlined />} title="User">
                <Menu.Item key="checkUser">
                  <Link to="/User">Check user</Link>
                </Menu.Item>
                <Menu.Item key="userPost">
                  <Link to="/UserPost">User post</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="media" icon={<VideoCameraOutlined />} title="Media">
                <Menu.Item key="photoAlbum">
                  <Link to="/PhotoAlbum">Photo album</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="">
            <Header className="" style={{ padding: 0 }} />
            <Content>
              <div className="" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/Home" />
                  </Route>
                  <Route path="/Home">
                    <Home />
                  </Route>
                  <Route path="/Post">
                    <PostContainer />
                  </Route>
                  <Route path="/CreatePost">
                    <CreatePostForm />
                  </Route>
                  <Route path="/User">
                    <UserContainer />
                  </Route>
                  <Route path="/UserPost">
                    <UserPost />
                  </Route>
                  <Route path="/PhotoAlbum">
                    <PhotoAlbum />
                  </Route>
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              <p>
                <strong>App</strong> by{" "}
                <Link to="https://github.com/duhoang00">Du Hoang.</Link> Using{" "}
                <Link to="https://reactjs.org/"> ReactJS </Link> ,{" "}
                <Link to="https://www.typescriptlang.org/"> TypeScript </Link>{" "}
                and <Link to="https://graphql.org/"> Graphql </Link>
              </p>
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </>
  );
}

export default App;
