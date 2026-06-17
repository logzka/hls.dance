import React from "react";
import { Link } from "gatsby"
import HoverElement from "./common/HoverElement";
import { MenuContext } from '../context/menu.context';

const Nav = () => {
    const { setOpen } = React.useContext(MenuContext);
    return <div className="navigation">
        <HoverElement><span onClick={() => setOpen(true)} className="menu-burger text-4xl sm:hidden opacity-70">&#x2630;</span></HoverElement>
        <nav className="hidden sm:block">
            <ul className="flex items-center gap-4 uppercase text-sm">
            <li className="">
                <HoverElement><Link to="/">блог</Link></HoverElement>
            </li>
            <li className="">
                <HoverElement><Link to="/">расписание</Link></HoverElement>
            </li>
            </ul>
        </nav>
    </div>
}

export default Nav;