import { Button, Card, Form } from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './todo.js';
import FormTodo from './formTodo.js';

class Todos extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="style">
                <h1 className="text-center mb-4">Todo List</h1>
                <FormTodo addTodo={this.props.addTodo} changeValue={this.props.changeValue} value={this.props.value} />
                {this.props.todos.map((todo, i) => (
                    <Card>
                        <Card.Body>
                            <div className="todo">
                                <Todo task={todo} key={i} index={i} markTodo={this.props.markTodo}
                                    value={this.props.value} changeValue={this.props.changeValue} toogleTodo={this.props.toogleTodo} removeTodo={this.props.removeTodo}
                                />
                            </div >
                        </Card.Body>
                    </Card>
                ))
                }
            </div >
        )
    }
}
export default Todos;