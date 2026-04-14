import React from "react";

const Container = ({children, className=''}) => {
    return <div className={`container mx-auto p-8 ${className}`}>{children}</div>
}

export default Container;