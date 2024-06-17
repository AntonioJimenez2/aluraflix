import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  //aqui se añaden los states
  const [abrirModal, setAbrirModal] = useState(false);
  console.log(abrirModal)

  useEffect(() => {
    console.log("Hello use effect");
  });

  return <GlobalContext.Provider value={{abrirModal, setAbrirModal}} >{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
