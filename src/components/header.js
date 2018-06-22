import React from 'react';

const ContentHeader = (props) => {
    if (props.isTitle)
        return (
            <h1 className="content-header">{props.children}</h1>
        ); 
    if (props.isSub)
        return (
            <h3 className="content-header">{props.children}</h3>
        ); 
    else
        return (
            <h2 className="content-header">{props.children}</h2>
        );

};

export default ContentHeader;