import * as React from "react"

const Button = ({children}) => {
  return (
   <button className="cursor-pointer hover:opacity-80 border-4 font-bold border-accent rounded-sm py-8 px-16">{children}</button>       
  )
}

export default Button;
