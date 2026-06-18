import React from "react";
import HoverElement from "./common/HoverElement";
import { MenuContext } from '../context/menu.context';
import NavList from "./NavList";

const Nav = () => {
    const { setOpen } = React.useContext(MenuContext);
    return <div className="navigation">
        <HoverElement><button onClick={() => setOpen(true)} className="menu-burger text-4xl lg:hidden opacity-70">&#x2630;</button></HoverElement>
        <nav className="hidden lg:block">
            <NavList />
        </nav>
    </div>
}

export default Nav;