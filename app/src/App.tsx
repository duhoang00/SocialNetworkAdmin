import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title has-text-centered">Social Network Admin</h1>
          <div className="columns">
            <Router>
              <div className="column is-2">
                <div className="box">
                  <aside className="menu">
                    <p className="menu-label">Post</p>
                    <ul>
                      <li>
                        <Link to="/Post">Check post</Link>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <Switch>
                    <Route path="/Post">
                      <></>
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
