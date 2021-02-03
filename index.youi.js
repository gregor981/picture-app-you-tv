import { AppRegistry } from "react-native";
import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { searchReducer } from "./src/redux/imageStore";
import {AppNavigator} from "./src/AppNavigator";

const store = createStore(
    combineReducers({ search: searchReducer }),
    applyMiddleware(thunk)
);

export default class YiReactApp extends Component {
  render() {
    return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
    );
  }
}

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);
