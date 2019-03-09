import React from "react";

const Title = props => <h1 style={{color: props.color.color}}>ToDo list, quantity of tasks: {props.data.length}</h1>

export default Title;
