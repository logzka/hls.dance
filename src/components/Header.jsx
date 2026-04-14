import { Link } from "gatsby"
import * as React from "react"
import Container from "./Container"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="header fixed w-full top-0 bg-dark/60 backdrop-blur-xs">
      <Container className="flex items-center justify-between">
      <Logo />
      <nav>
        <ul>
          <li className="uppercase text-xs">
            <Link to="/">каталог</Link>
          </li>
        </ul>
      </nav>
      <a href="tel.:77777777777" className="text-accent text-sm">+7 777 7777 77 7</a>
      </Container>
    </header>
  )
}

export default Header;
