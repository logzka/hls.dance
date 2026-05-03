import React from "react";

const Article = ({children, className}) => {
    return <article className={`pl-16 mb-16 ${className}`}>{children}</article>
}

export default Article;