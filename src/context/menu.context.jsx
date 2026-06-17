import React, { createContext, useState } from 'react';

export const MenuContext = createContext({
  open: undefined,
  setOpen: () => ({}),
});

export const MenuContextProvider = ({ children }) => {
  const [open, setOpen] = useState();

  const value = {
    open,
    setOpen,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
