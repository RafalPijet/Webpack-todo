import React from "react";
import style from "../components/Todo.css";

const Todo = props => <h3 className={style.Todo} onClick={() => props.onRemove(props.id)}>{props.id}: {props.text}</h3>;

export default Todo;