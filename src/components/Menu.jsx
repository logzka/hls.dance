import React from 'react';
import { MenuContext } from '../context/menu.context';
import Container from './Container';
import HoverElement from "./common/HoverElement";
import ArticleTitle from './ArticleTitle';
import NavList from './NavList';
import CallMeMaybe from './CallMeMaybe';

const Menu = () => {
  const { open, setOpen } = React.useContext(MenuContext);
//   const [active, setActive] = React.useState(null);

//   const itemHandleClick = (item) => {
//     if (item?.children) {
//       if (active === item.label) {
//         setActive(null);
//       } else setActive(item.label);
//       return;
//     }
//     setOpen(false);
//   };

  /** Disable body scrolling */
  React.useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);
  return (
    <div
      className={`menu animate-menu
            fixed
            left-0
            right-0
            top-0
            bottom-0
            overflow-auto
            z-50`}
      style={{
        display: open ? 'block' : 'none',
        background: 'radial-gradient(circle at center, #FF00B3, #131700 128%)',
      }}
    >
      <Container className="menu--container grid gap-16">
        <HoverElement className='justify-self-end'><button onClick={() => setOpen(false)} className="menu-burger text-5xl opacity-70">&times;</button></HoverElement>
        <NavList className='mx-auto grid w-fit gap-2 sm:text-xl' />
        <CallMeMaybe className='w-fit mx-auto'>
          <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit uppercase'>просто позвони</ArticleTitle>
        </CallMeMaybe>
      </Container>
    </div>
  );
};

export default Menu;
