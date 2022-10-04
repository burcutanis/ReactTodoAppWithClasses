import { Button, Card, Form } from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
}
export default Footer;