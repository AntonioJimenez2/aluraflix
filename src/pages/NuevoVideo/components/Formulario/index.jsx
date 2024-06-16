import CampoFormulario from "../CampoFormulario";
import styles from "./Formulario.module.css";
import ListaOpciones from "../ListaOpciones/";
import TextArea from "../TextArea/";
import { useState } from "react";

const Formulario = (props) => {
  const [titulo, actualizarTitulo] = useState("");
  const [imagen, actualizarImagen] = useState("");
  const [video, actualizarVideo] = useState("");
  const [descripcion, actualizarDescripcion] = useState("");
  const [categoria, actualizarCategoria] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar envio");
    let datosAEnviar = {
      titulo,
      imagen,
      video,
      descripcion,
      categoria,
    };
    console.log(datosAEnviar);
  };

  return (
    <>
      <section className={styles.contenedor_formulario}>
        <h3>{props.titulo}</h3>
        <form onSubmit={manejarEnvio}>
          <CampoFormulario
            titulo="Titulo"
            placeholder="Ingrese el titulo..."
            name="titulo"
            type="text"
            required
            valor={titulo}
            actualizarValor={actualizarTitulo}
          />
          <CampoFormulario
            titulo="Imagén"
            placeholder="Ingrese el enlace de la imagén..."
            name="imagen"
            type="url"
            required
            valor={imagen}
            actualizarValor={actualizarImagen}
          />
          <CampoFormulario
            titulo="Vídeo"
            placeholder="Ingrese el enlace del vídeo..."
            name="video"
            type="url"
            required
            valor={video}
            actualizarValor={actualizarVideo}
          />
          <ListaOpciones
            valor={categoria}
            actualizarCategoria={actualizarCategoria}
          />
          <TextArea
            titulo="Descripción"
            placeholder="Ingrese la descripción del vídeo..."
            name="descripcion"
            type="text"
            required
            valor={descripcion}
            actualizarValor={actualizarDescripcion}
          />

          <CampoFormulario type="submit" value="GUARDAR" />
          <CampoFormulario type="reset" value="LIMPIAR" />
        </form>
      </section>
    </>
  );
};

export default Formulario;
