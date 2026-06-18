import * as React from "react"

const Button = ({children}) => {
  return (
   <button className="cursor-pointer border-4 sm:border-8 font-bold border-accent rounded-sm py-2 px-6 sm:py-4 sm:px-10 md:py-8 md:px-16">{children}</button>       
  )
}

export default Button
