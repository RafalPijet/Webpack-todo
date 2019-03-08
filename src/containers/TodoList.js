import React from "react";
import Todo from "../components/Todo";

const TodoList = props => props.data.map(pos => <Todo key={pos.id} text={pos.text} id={pos.id} onRemove={props.onRemove}/>);

export default TodoList;