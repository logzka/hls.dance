import * as React from "react"
import {Link} from 'gatsby'
import HoverElement from "./common/HoverElement";

const Logo = ({className}) => {
  return (
      <div className={`logo font-medium lg:text-lg ${className}`}>
        <HoverElement>
            <Link to='/'>
              <span className="uppercase text-yellow-100 block sm:leading-0 sm:mb-1">logzka mëda dance</span>
              <span className="font-light text-sm">
                <span className="text-green-300">_танцы на каблуках</span> 
                {/* и не только_ */}
              </span>
          </Link>
        </HoverElement>
      </div>
  )
}

export default Logo;
