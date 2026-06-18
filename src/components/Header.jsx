import * as React from "react"
import Container from "./Container"
import Logo from "./Logo"
import Nav from "./Nav"
import _throttle from 'lodash/throttle';
import CallMeMaybe from "./CallMeMaybe"

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
          <CallMeMaybe className="hidden lg:block"><span className="text-accent uppercase">просто позвони</span></CallMeMaybe>
        </div>
      </Container>
    </header>
  )
}

export default Header;
