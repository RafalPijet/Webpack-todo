import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import dataColors from "../assets/colors";
import dataTasks from "../assets/tasks";


ReactDOM.render(
    <App colors={dataColors} tasks={dataTasks}/>, document.getElementById("app")
);