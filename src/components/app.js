import React, {Component} from 'react';
import { Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import axios from 'axios';

import ContentMenu from './contentMenu';
import PythonProgram from './pythonProgram';
import Markdown from './markdown';
import Article from './article';
const fs = require('fs');

let history = createBrowserHistory()

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: "./Content/Crypto/64/64info.md"
        };
    }

    componentWillMount() {
        this.setState({ currentMd: " " + this.getMarkdown() });
    }

    render() {
        return (
            <Router history={history}>
                <div className="container">
                    <ContentMenu />
                    <Route path='/' render={props => (
                        <Article>
                        <Markdown>
                            {this.state.currentMd}
                        </Markdown>
                        <PythonProgram scriptName="64" />
                    </Article>
                    )}/>
                </div>
            </Router>
        );
    };

    getAllFolders = () => {
        axios.get("http://localhost:5000/controllers")
        .then((response) => 
            {
                this.setState({
                    currentMd: response.data.response
                })
            }
        )
        .catch((err) => console.log(err));
    }

    getMarkdown = () => {
        axios.get("http://localhost:5000/md?file=" + this.state.path)
        .then((response) => 
            {
                this.setState({
                    currentMd: response.data.response
                })
            }
        )
        .catch((err) => console.log(err));
    }
};

