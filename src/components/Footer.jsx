import * as React from "react"
import Container from "./Container"
import Logo from "./Logo"
import { Link } from "gatsby"
import HoverElement from "./common/HoverElement";
// import Nav from "./Nav"

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <Container className="flex flex-col sm:flex-row justify-between">
      <Logo className="mb-4" />
      {/* <Nav /> */}
      <ul className="grid gap-2 text-sm mb-4">
        <li className="">
            <HoverElement><Link to="/">Блог</Link></HoverElement>
        </li>
        <li className="">
            <HoverElement><Link to="/">Pасписание</Link></HoverElement>
        </li>
        </ul>
      <a href="tel.:+79604867349" className="text-accent text-sm">+7 (960) 486 73 49</a>
      </Container>
    </footer>
  )
}

export default Footer;
