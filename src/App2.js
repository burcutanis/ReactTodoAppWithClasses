import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components2/footer';
import Todos from './components2/todos';

/*
class FormTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.change = this.change.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("input value:", e.target.value);
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
}*/


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
}*/

/*
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.all = this.all.bind(this);
        this.completed = this.completed.bind(this);
        this.active = this.active.bind(this);
    }
    all() {
        this.props.setCurrentFilter("All");
    }
    completed() {
        this.props.setCurrentFilter("Completed");
    }
    active() {
        this.props.setCurrentFilter("Active");
    }
    render() {
        return (
            <footer className="style2">
                <Button variant="outline-success" onClick={this.all}>All</Button>
                <Button variant="outline-info" onClick={this.completed}>Completed</Button>
                <Button variant="outline-danger" onClick={this.active}>Active</Button>
            </footer>
        );
    }
}*/

/*
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

}*/
/*
class Todos extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        var that = this;
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
*/
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFilter: "All",
            todos: [{ text: "text11", completed: true },
            { text: "text2", completed: false },
            { text: "text3", completed: false }
            ],
            value: ""
        }
        this.markTodo = this.markTodo.bind(this);
        this.toogleTodo = this.toogleTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.setCurrentFilter = this.setCurrentFilter.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    setCurrentFilter(filterName) {
        this.setState({ currentFilter: filterName });
    }

    markTodo(index) {
        var todos = this.state.todos;
        todos[index].completed = true;
        this.setState({ todos: todos });
    }


    toogleTodo(index) {
        var todos = this.state.todos;
        todos[index].completed = !todos[index].completed;
        this.setState({ todos: todos });
    }

    removeTodo(index) {
        var todos = this.state.todos;
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        this.setState({ todos: newTodos });
    }

    addTodo(newText) {
        var todos = this.state.todos;
        todos.push({ text: newText, completed: false });
        this.setState({ todos: todos });
    }

    changeValue(newText) {
        console.log(newText);
        this.setState({ value: newText });
    }

    render() {

        var filterFn = function (task) {
            if (this.state.currentFilter === 'All') {
                return true;
            }

            if (this.state.currentFilter === 'Active') {
                return !task.completed;
            }

            if (this.state.currentFilter === 'Completed') {
                return task.completed;
            }
        }.bind(this);

        var tasksForCriteria = this.state.todos.filter(filterFn);
        return (
            <React.Fragment>
                <div className="app">
                    <Todos todos={tasksForCriteria} addTodo={this.addTodo} changeValue={this.changeValue} value={this.state.value} markTodo={this.markTodo} toogleTodo={this.toogleTodo} removeTodo={this.removeTodo} />
                    <Footer currentFilter={this.state.currentFilter} setCurrentFilter={this.setCurrentFilter} />
                </div>
            </React.Fragment>
        )
    }
}
export default App;