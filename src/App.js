import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import { Provider } from "react-redux";
import store from "./store/";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Sidebar />
        <Video />
      </Provider>
    );
  }
}

export default App;
