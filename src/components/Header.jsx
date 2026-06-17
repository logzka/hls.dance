import * as React from "react"
import HoverElement from "./common/HoverElement"
import Container from "./Container"
import Logo from "./Logo"
import Nav from "./Nav"
import _throttle from 'lodash/throttle';

const Header = () => {
  const [scrollOffset, setScrollOffset] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = _throttle(() => {
      setScrollOffset((window.scrollY || 0) > 0);
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`header fixed z-40 w-full transition-all top-0 ${scrollOffset ? 'bg-dark/60 backdrop-blur-xs' : ''}`}>
      <Container className="">
        <div className="header--inner flex items-center justify-between">
          <Logo />
          <Nav />
          <HoverElement className="hidden sm:block"><a href="tel:+79604867349" className="text-accent uppercase text-sm">просто позвони</a></HoverElement>
        </div>
      </Container>
    </header>
  )
}

export default Header;
