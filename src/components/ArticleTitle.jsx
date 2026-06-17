import React from "react";

const ArticleTitle = ({children, className}) => {
    return <h3 className={`uppercase font-medium sm:text-2xl mb-8 sm:mb-12 px-2 ${className}`}>{children}</h3>
}

export default ArticleTitle;