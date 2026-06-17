import * as React from "react"

const Button = ({children}) => {
  return (
   <button className="cursor-pointer border-8 font-bold border-accent rounded-sm py-2 px-6 sm:py-8 sm:px-16">{children}</button>       
  )
}

export default Button
