import React, {Component} from 'react';
import ContentMenu from './contentMenu';
import PythonProgram from './pythonProgram';
import Markdown from './markdown';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <ContentMenu />
                <div className="content">
                    <h1>Hello React and Electron</h1>
                    <Markdown> # HELLO MARKDOWN </Markdown>
                </div>
            </div>
        );
    };
};

