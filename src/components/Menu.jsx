import React from 'react';
import { Link } from 'gatsby';
import { MenuContext } from '../context/menu.context';
import Container from './Container';
import HoverElement from "./common/HoverElement";
import ArticleTitle from './ArticleTitle';

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
      <Container className="menu--container">
        <HoverElement><span onClick={() => setOpen(false)} className="menu-burger text-4xl sm:hidden opacity-70">&times;</span></HoverElement>

        <ul className="mx-auto grid w-fit gap-2 text-sm mb-16">
            <li className="">
                <HoverElement><Link to="/">Блог</Link></HoverElement>
            </li>
            <li className="">
                <HoverElement><Link to="/">Pасписание</Link></HoverElement>
            </li>
        </ul>
        <HoverElement className='w-fit mx-auto'><ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'><a href="tel:+79604867349" className="uppercase">просто позвони</a></ArticleTitle></HoverElement>
      </Container>
    </div>
  );
};

export default Menu;
