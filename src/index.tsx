import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloProvider} from "@apollo/client";
import {Provider} from "react-redux";
import {client} from "./graphQL/client";
import {setupStore} from "./store/store";
import './styles/reset.css';
import App from './App';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
