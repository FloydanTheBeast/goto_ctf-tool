import React, {Component} from 'react';
import ContentMenu from './contentMenu'

export default class App extends Component {
    render() {
        return (
            <div>
                <ContentMenu />
                <h1>Hello React and Electron</h1>
            </div>
        );
    };
};

