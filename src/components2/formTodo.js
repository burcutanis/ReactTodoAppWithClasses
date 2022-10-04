import { Button, Card, Form } from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
/*
class FormTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.change = this.change.bind(this);
        this.state = {
            value: ""
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log("input value:", e.target.value);
        this.props.addTodo(this.state.value);
    };

    change = e => {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label><b>Add Todo</b></Form.Label>
                    <Form.Control
                        value={this.state.value}
                        type="text"
                        className="input"
                        onChange={this.change}
                        placeholder="Add new todo" />
                </Form.Group>
                <button className='button' type="submit">
                    Submit
                </button>
            </Form>
        );
    }
}
export default FormTodo;
*/


export default class FormTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.change = this.change.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("input value:", this.props.value);
        this.props.addTodo(this.props.value);
    };

    change = e => {
        this.props.changeValue(e.target.value);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label><b>Add Todo</b></Form.Label>
                    <Form.Control
                        value={this.props.value}
                        type="text"
                        className="input"
                        onChange={this.change}
                        placeholder="Add new todo" />
                </Form.Group>
                <button className='button' type="submit">
                    Submit
                </button>
            </Form>
        );
    }
}