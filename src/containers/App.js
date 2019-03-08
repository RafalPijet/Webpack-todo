import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import TodoList from "./TodoList";
import TodoForm from "../components/TodoForm";
import { hot } from "react-hot-loader";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }, {
                id: 4,
                text: "go shopping"
            }]
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
        console.log(id);
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title data={this.state.data}/>
                <TodoForm onTask={this.addTodo.bind(this)}/>
                <TodoList data={this.state.data} onRemove={this.removeTodo.bind(this)}/>
            </div>
        );
    }
}

export default hot(module)(App);