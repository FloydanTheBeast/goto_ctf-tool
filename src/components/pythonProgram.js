import React, { Component } from 'react';

class PythonProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    render() {
        return (
            <div className="python-code">
                <p>{this.state.data}</p>
                <button onClick={this.spawnChildProcess()}></button>
            </div>
        );
    }

    spawnChildProcess() {
        
    }
};

export default PythonProgram;