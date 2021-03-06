import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deadline: 'December 31, 2017',
            newDeadline: ''
        }
    }

    changeDeadLine() {
        this.setState({ deadline: this.state.newDeadline });
    }


    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to <span>{this.state.deadline}</span></div>

                <Clock 
                    deadline={this.state.deadline}
                />

                <Form inline>
                    <FormControl
                        className="Deadline-input"
                        placeholder='Input the Date'
                        onChange={event => this.setState({ newDeadline: event.target.value })}
                    />
                    <Button onClick={() => this.changeDeadLine()}>Submit</Button>
                </Form>
            </div>
        )

    }
}

export default App;