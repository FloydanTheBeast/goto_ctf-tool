import React from 'react';
import marked from 'marked';

let Markdown = (props) => {
    return(
        <div className="markdown-text" dangerouslySetInnerHTML={{__html: marked(props.children)}}></div>
    );
};

export default Markdown;

