import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
it ("renders without crashing", ()=>{const Div=document.createElement ("div");
                                     ReactDOM.render(<App/>, Div);
                                     ReactDOM.unmountComponentAtNode (Div);});