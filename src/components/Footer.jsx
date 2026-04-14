import { Link } from "gatsby"
import * as React from "react"
import Container from "./Container"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <Container className="flex items-center justify-between">
      <Logo />
      <nav>
        <ul>
          <li className="uppercase text-xs">
            <Link to="/">блог</Link>
          </li>
        </ul>
      </nav>
      <a href="tel.:77777777777" className="text-accent text-sm">+7 777 7777 77 7</a>
      </Container>
    </footer>
  )
}

export default Footer;
