import React from "react";
import { Link } from "gatsby"
import HoverElement from "./common/HoverElement";

const NavList = ({className = 'flex items-center gap-4 uppercase'}) => {
    return <ul className={`navigation-list text-sm sm:text-base ${className}`}>
        <li className="">
            <HoverElement><Link to="/">Блог</Link></HoverElement>
        </li>
        <li className="">
            <HoverElement><Link to="/">Расписание</Link></HoverElement>
        </li>
        <li className="">
            <HoverElement><Link to="/">Абонементы</Link></HoverElement>
        </li>
        <li className="">
            <HoverElement><Link to="/">Индивы</Link></HoverElement>
        </li>
    </ul>
}

export default NavList;