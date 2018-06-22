import React, { Component } from 'react';
import axios from 'axios';

class PythonProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            args: ''
        };
    }

    render() {
        return (
            <div className="python-code">
                <input type="text" ref={(input) => { this.textInput = input; }}
                 onChange={this.handleChange.bind(this)} />
                <input type="text" readOnly value={this.state.data}/>
                <button onClick={this.spawnChildProcess.bind(this)}>Поехали</button>
            </div>
        );
    }

    spawnChildProcess() {         
        axios.get("http://localhost:5000/python?name=" + this.props.scriptName
                    + "&args=" + this.state.args)
        .then((response) => this.setState({
            data: response.data.response
        }))
        .catch((err) => console.log(err));
    }

    handleChange() {
        this.setState({
            args: this.textInput.value
        });
    }
};

export default PythonProgram;