import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' ;
import ContentHeader from './header';
import MenuCategory from './menuCategory';

class ContentMenu extends Component {
    render() {
        return (
            <div className="content-menu">
                <MenuCategory link="/" name="Test">
                    <ContentHeader isSub>Шифры</ContentHeader>
                    <p>Пример текста</p>
                </MenuCategory>
                <MenuCategory link="/manual" name="Test">
                    <ContentHeader isSub>Мануал</ContentHeader>
                    <p>Пример текста</p>
                </MenuCategory>
            </div>
        )
    }

    getContentUrls = () => {
        
    };

    categories = {};
}

export default ContentMenu;