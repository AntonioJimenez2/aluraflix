import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { GlobalContext } from "./GlobalContext";

export const FormularioContext = createContext();

const FormularioContextProvider = ({ children }) => {
  const [titulo, actualizarTitulo] = useState("");
  const [imagen, actualizarImagen] = useState("");
  const [video, actualizarVideo] = useState("");
  const [descripcion, actualizarDescripcion] = useState("");
  const [categoria, actualizarCategoria] = useState("");

  const { urlApi, videos, setVideos } = useContext(GlobalContext);

  //recibir datos de video nuevo y enviarlo
  const manejarEnvio = e => {
    e.preventDefault();
    console.log("Manejar envio");
    let nuevoVideo = {
      titulo,
      imagen_url: imagen,
      video_url: video,
      descripcion,
      categoria
    };
    console.log(nuevoVideo);
    enviarVideo(urlApi, nuevoVideo);
  };

  //enviar video nuevo a api
  async function enviarVideo(urlApi, video) {
    try {
      const conexion = await fetch(urlApi, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(video)
      });

      if (!conexion.ok) {
        throw new Error(
          "Ha ocurrido un error al enviar los datos del producto"
        );
      }
      const nuevoVideo = await conexion.json();
      console.log(nuevoVideo);
      setVideos([...videos, nuevoVideo]);
      alLimpiar();

      return nuevoVideo;
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return null;
    }
  }

  //manejar reset
  const alLimpiar = () => {
    actualizarTitulo("");
    actualizarDescripcion("");
    actualizarCategoria("");
    actualizarImagen("");
    actualizarVideo("");
  };

  return (
    <FormularioContext.Provider
      value={{
        titulo,
        actualizarTitulo,
        imagen,
        actualizarImagen,
        video,
        actualizarVideo,
        descripcion,
        actualizarDescripcion,
        categoria,
        actualizarCategoria,
        manejarEnvio,
        alLimpiar
      }}
    >
      {children}
    </FormularioContext.Provider>
  );
};

export default FormularioContextProvider;
