import React, { createContext, useContext, useState } from 'react';

const NavbarCollapseContext = createContext();

export const useNavbarCollapseContext = () => {
  return useContext(NavbarCollapseContext);
};

export const NavbarCollapseProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <NavbarCollapseContext.Provider value={{ isExpanded, toggleNavbar }}>
      {children}
    </NavbarCollapseContext.Provider>
  );
};
