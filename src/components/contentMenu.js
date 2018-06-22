import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' ;

import ContentHeader from './header';

export default class ContentMenu extends Component {
    render() {
        return (
            <Router>
                <div className="content-menu">
                    <Link to="/">
                        <ContentHeader>Главная страница</ContentHeader>
                    </Link>
                    <ContentHeader isSub>Шифры</ContentHeader>
                    <p>Пример текста</p>
                </div>
            </Router>
        )
    }
}
