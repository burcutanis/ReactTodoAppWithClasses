import { Button, Card, Form } from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.mark = this.mark.bind(this);
        this.toogle = this.toogle.bind(this);
        this.remove = this.remove.bind(this);

    }
    mark() {
        this.props.markTodo(this.props.index);
    }
    toogle() {
        this.props.toogleTodo(this.props.index);
    }
    remove() {
        this.props.removeTodo(this.props.index);
    }

    render() {
        return (
            <React.Fragment>
                <span style={{ textDecoration: this.props.task.completed ? "line-through" : "" }}>{this.props.task.text}</span>
                <Button variant="outline-success" onClick={this.mark}>✓</Button>{' '}
                <Button variant="outline-success" onClick={this.toogle}>Toogle</Button>
                <Button variant="outline-danger" onClick={this.remove}>✕</Button>
            </React.Fragment>
        );
    }

}
export default Todo;