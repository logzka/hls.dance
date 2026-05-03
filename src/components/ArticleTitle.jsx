import React from "react";

const ArticleTitle = ({children, className}) => {
    return <h3 className={`uppercase font-medium text-xl mb-8 ${className}`}>{children}</h3>
}

export default ArticleTitle;