import React from "react";

const BlurText = ({children, className='bottom-0 right-0'}) => {
    return <div className={`absolute blur-sm opacity-40 ${className}`}>{children || <span className="text-left text-8xl">хочу танцевать</span>}</div>
}

export default BlurText;