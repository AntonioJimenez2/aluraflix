import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  //aqui se añaden los states
  // abrir y cerrar modal
  const [abrirModal, setAbrirModal] = useState(false);
  const [videos, setVideos] = useState([]);
  console.log(abrirModal);

  //llamada a la api

  useEffect(() => {
    const getVideos = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/videos");
        const videos = await respuesta.json();
        setVideos(videos);
        console.log(videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getVideos();
  }, []); // Array vacío indica que el efecto se ejecuta solo una vez al montar el componente

  return (
    <GlobalContext.Provider value={{ abrirModal, setAbrirModal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
