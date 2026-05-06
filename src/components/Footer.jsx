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
      <a href="tel.:+79604867349" className="text-accent text-sm">+7 (960) 486 73 49</a>
      </Container>
    </footer>
  )
}

export default Footer;
