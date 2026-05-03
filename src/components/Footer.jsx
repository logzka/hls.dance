import * as React from "react"
import Container from "./Container"
import Logo from "./Logo"
import Nav from "./Nav"

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <Container className="flex items-center justify-between">
      <Logo />
      <Nav />
      <a href="tel.:77777777777" className="text-accent text-sm">+7 777 7777 77 7</a>
      </Container>
    </footer>
  )
}

export default Footer;
