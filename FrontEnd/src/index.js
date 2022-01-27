import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { configureStore } from './redux/Store'

Modal.setAppElement("#root");

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
