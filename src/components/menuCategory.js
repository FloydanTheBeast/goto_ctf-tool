import React from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from './header';

const MenuCategory = (props) => {
    return(
        <div className="menu-category">
            <Link to={props.link}>
                <ContentHeader>{props.name}</ContentHeader>
            </Link>
            {props.children}
        </div>
    )
}


export default MenuCategory;