import React from "react";

const ArticleList = ({list, className}) => {
    return <ul className={`grid gap-2.5 ${className}`}>{
        list.map((txtEl, i) => (
            <li key={`artklel-${i}`} className="flex gap-1.5"><div className="bg-yellow-100 shadow-lg shadow-green-300/40 rounded-full w-2 h-2 shrink-0 mt-2" /> {txtEl}</li>
        ))
    }</ul>
}

export default ArticleList;