import * as React from "react"

const HoverElement = ({children, className}) => {
  return (
    <div className={`hover-element cursor-pointer transition-opacity hover:opacity-80 ${className}`}>
       {children}
    </div>
  )
}

export default HoverElement;
