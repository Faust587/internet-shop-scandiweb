import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://ancient-ocean-59119.herokuapp.com/",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
