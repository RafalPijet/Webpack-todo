import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import TodoList from "./TodoList";
import TodoForm from "../components/TodoForm";
import ChangeButton from "../components/Button";
import { hot } from "react-hot-loader";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.tasks,
            colors: props.colors,
            titleColor: props.colors[5],
            nextColor: props.colors[0]
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    changeColor() {
        let colorFromNext = this.state.nextColor;
        let dataOfColor = null;
        do {
            dataOfColor = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
        }
        while (colorFromNext.name === dataOfColor.name);
        this.setState({
            nextColor: dataOfColor
        });
        this.setState({
            titleColor: colorFromNext
        })

    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title data={this.state.data} color={this.state.titleColor}/>
                <ChangeButton name={this.state.titleColor.name} nextName={this.state.nextColor.name} setColor={this.changeColor.bind(this)}/>
                <TodoForm onTask={this.addTodo.bind(this)}/>
                <TodoList data={this.state.data} onRemove={this.removeTodo.bind(this)}/>
            </div>
        );
    }
}

export default hot(module)(App);