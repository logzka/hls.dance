import React from "react";
import { Link } from "gatsby"
import HoverElement from "./common/HoverElement";

const Nav = () => {
    return <nav>
        <ul className="flex items-center gap-4 uppercase text-sm">
        <li className="">
            <HoverElement><Link to="/">блог</Link></HoverElement>
        </li>
        <li className="">
            <HoverElement><Link to="/">расписание</Link></HoverElement>
        </li>
        </ul>
  </nav>
}

export default Nav;