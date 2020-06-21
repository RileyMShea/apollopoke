import React from "react";
import ReactDOM from "react-dom";
import {
  InMemoryCache,
  HttpLink,
  ApolloClient,
  gql,
  ApolloProvider,
} from "@apollo/client";
import App from "./App";

export const MY_QUERY = gql`
{
  pokemon(name: "Pikachu") {
    id
    number
    name
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
`

const client = new ApolloClient({
  link: new HttpLink({
uri: 'https://graphql-pokemon.now.sh/?'
  }),
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  rootElement,
);
