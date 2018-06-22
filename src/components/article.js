import React from 'react';

const Article = (props) => {
    return(
        <div className="article">
            {props.children}
        </div>
    );
};

export default Article;