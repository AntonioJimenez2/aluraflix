import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  // abrir y cerrar modal
  const [abrirModal, setAbrirModal] = useState(false);

  //url de api de videos
  const urlApi = "http://localhost:5000/videos/";

  //arreglo de videos api
  const [videos, setVideos] = useState([]);

  //llamada a la api

  useEffect(() => {
    const getVideos = async () => {
      try {
        const respuesta = await fetch(urlApi);
        const videos = await respuesta.json();
        setVideos(videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getVideos();
  }, []); // Array vacío indica que el efecto se ejecuta solo una vez al montar el componente

  //Video seleccionado
  const [videoSeleccionado, setVideoSeleccionado] = useState({
    id: "1",
    titulo: "Conoce el canal de Alura Latam",
    descripcion:
      "Les damos la bienvenida al canal de Alura Latam. Aquí encontrarás contenido de diversos temas relacionados con la tecnología como programación, ciencia de datos y más.",
    imagen_url: "https://i.ytimg.com/vi/1iJ5lof5kLM/maxresdefault.jpg",
    video_url: "https://www.youtube.com/embed/1iJ5lof5kLM",
    categoria: "Introducción",
    color: "#121212"
  });

  return (
    <GlobalContext.Provider
      value={{
        abrirModal,
        setAbrirModal,
        videos,
        setVideos,
        videoSeleccionado,
        setVideoSeleccionado,
        urlApi
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
