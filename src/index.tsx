import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./App";
import "./mystyle.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphqlzero.almansi.me/api",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
