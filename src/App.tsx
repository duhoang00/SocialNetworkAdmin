import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { PostContainer } from "./components/PostContainer";
import { UserContainer } from "./components/UserContainer";
import { CreatePostForm } from "./components/CreatePost";
import { UserPost } from "./components/UserPost";
import { PhotoAlbum } from "./components/PhotoAlbum";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title is-1 has-text-centered">Social Network Admin</h1>
          <div className="columns">
            <Router>
              <div className="column is-2">
                <div className="box">
                  <aside className="menu">
                    <p className="menu-label">Home</p>
                    <ul className="menu-list">
                      <li>
                        <Link to="/Home">Home</Link>
                      </li>
                    </ul>
                    <p className="menu-label">Post</p>
                    <ul className="menu-list">
                      <li>
                        <Link to="/Post">Check post</Link>
                      </li>
                      <li>
                        <Link to="/CreatePost">Create post</Link>
                      </li>
                    </ul>

                    <p className="menu-label">User</p>
                    <ul className="menu-list">
                      <li>
                        <Link to="/User">Check user</Link>
                      </li>
                      <li>
                        <Link to="/UserPost">User post</Link>
                      </li>
                    </ul>

                    <p className="menu-label">Media</p>
                    <ul className="menu-list">
                      <li>
                        <Link to="/PhotoAlbum">Photo album</Link>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
              <div className="column">
                <div className="box">
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
              </div>
            </Router>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
