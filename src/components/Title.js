import React from "react";
import style from "../components/Title.css";

const Title = props => <h1 className={style.Title}>ToDo list, quantity of tasks: {props.data.length}</h1>;

export default Title;
