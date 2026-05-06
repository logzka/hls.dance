import React from 'react';

export const FlipContext = React.createContext({
  flipped: [],
  setFlipped: () => ({}),
});

export const FlipContextProvider = ({ children }) => {
  const [flipped, setFlipped] = React.useState([]);

  const value = {
    flipped,
    setFlipped,
  };

  return <FlipContext.Provider value={value}>{children}</FlipContext.Provider>;
};
