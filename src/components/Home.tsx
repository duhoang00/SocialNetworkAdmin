import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const Home: FunctionComponent = () => {
  return (
    <>
      <h1 className="title has-text-centered">Home</h1>

      <p className="has-text-centered">
        <Button type="primary">Explorer now</Button>
      </p>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>App</strong> by{" "}
            <Link to="https://github.com/duhoang00">Du Hoang.</Link> Using{" "}
            <Link to="https://reactjs.org/"> ReactJS </Link> ,{" "}
            <Link to="https://www.typescriptlang.org/"> TypeScript </Link> and{" "}
            <Link to="https://graphql.org/"> Graphql </Link>
          </p>
        </div>
      </footer>
    </>
  );
};
