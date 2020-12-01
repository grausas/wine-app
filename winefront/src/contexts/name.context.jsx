import React, { useState, createContext } from "react";

export const NameContext = createContext({});

const name = "Marius";

export const NameProvider = ({ children }) => {
  const [state, setState] = useState(name);
  return (
    <NameContext.Provider value={{ state, setState }}>
      {children}
    </NameContext.Provider>
  );
};
