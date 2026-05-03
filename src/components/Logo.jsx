import * as React from "react"
import {Link} from 'gatsby'
import HoverElement from "./common/HoverElement";

const Logo = () => {
  return (
      <div className="logo font-medium lg:text-lg">
        <HoverElement>
            <Link to='/'>
            <span className="uppercase text-accent">logzka mëda dance</span>
        <br />
        <span className="font-light text-sm">
        <span className="text-green-300">_танцы на каблуках</span> и не только_
        </span></Link>
        </HoverElement>
      </div>
  )
}

export default Logo;
