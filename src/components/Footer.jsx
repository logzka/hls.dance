import * as React from "react"
import CallMeMaybe from "./CallMeMaybe"
import Container from "./Container"
import Logo from "./Logo"
import NavList from "./NavList"

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <Container className="flex flex-col sm:flex-row justify-between">
      <Logo className="mb-4" />
      <NavList className='grid gap-2 mb-4' />
      <CallMeMaybe className="text-accent text-lg" />
      </Container>
    </footer>
  )
}

export default Footer;
