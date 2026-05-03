import * as React from "react"
import HoverElement from "./common/HoverElement"
import Container from "./Container"
import Logo from "./Logo"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="header fixed z-50 w-full top-0 bg-dark/60 backdrop-blur-xs">
      <Container className="flex items-center justify-between">
      <Logo />
      <Nav />
      <HoverElement><a href="tel:+79604867349" className="text-green-300 uppercase text-sm">просто позвони</a></HoverElement>
      </Container>
    </header>
  )
}

export default Header;
