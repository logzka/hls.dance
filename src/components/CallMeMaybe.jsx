import * as React from "react"
import HoverElement from "./common/HoverElement"

const CallMeMaybe = ({children = '+7 (960) 486 73 49', className = ''}) => {
  return (
    <HoverElement className={className}><a href="tel:+79604867349">{children}</a></HoverElement>
  )
}

export default CallMeMaybe
