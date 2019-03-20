import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import Thunk from "redux-thunk";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom"; 
import Logger from "redux-logger";
import "./index.css";
import App from "./App.js";
import RootReducer from "./Reducers/RootReducer.js";
import * as ServiceWorker from "./ServiceWorker";
const AllEnhancers=compose (applyMiddleware (Thunk, Logger)/*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()*/);
const Store=createStore (RootReducer, AllEnhancers);
ReactDOM.render(<Router>
                  <Provider store={Store}>
                    <App/>
                  </Provider>
                </Router>, document.getElementById ("root"));
// If you want your app to work offline and load faster, you can change unregister () to register () below. Note this comes with some pitfalls. Learn more about service workers: http://bit.ly/CRA-PWA
ServiceWorker.unregister ();