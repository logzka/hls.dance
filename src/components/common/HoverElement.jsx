import * as React from "react"

const HoverElement = ({children}) => {
  return (
      <div className="hover-element cursor-pointer transition-opacity hover:opacity-80">
       {children}
      </div>
  )
}

export default HoverElement;
