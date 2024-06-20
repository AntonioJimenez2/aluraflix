import styles from "./CardVideo.module.css";
import icono_borrar from "./icono_borrar.png";
import icono_editar from "./icono_editar.png";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";

const CardVideo = props => {
  const { setAbrirModal, setVideoSeleccionado, videos, setVideos, urlApi } =
    useContext(GlobalContext);
  //se añade el color al objeto video
  props.datos.color = props.color;
  const videoClicado = props.datos;

  // funcion eliminar video

  const eliminarVideo = id => {
    console.log("video eliminado id: ", id);
    fetch(`${urlApi}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("La solicitud de eliminación de video falló");
        }
        return response.json();
      })
      .then(() => {
        const videosActualizados = videos.filter(video => video.id !== id);
        setVideos(videosActualizados);
      })
      .catch(error => {
        console.error("Error al eliminar el video:", error);
      });
  };

  return (
    <>
      <div
        className={styles.contenedor_card}
        style={{ borderColor: props.color }}
        data-index={props.datos.id}
      >
        <img
          className={styles.imagen_video}
          src={props.datos.imagen_url}
          alt="portada card"
          onClick={() => setVideoSeleccionado(videoClicado)}
        />
        <div
          className={styles.contenedor_opciones}
          style={{ borderColor: props.color }}
        >
          <span
            className={styles.borrar_editar}
            onClick={() => eliminarVideo(props.datos.id)}
          >
            <img
              className={styles.iconos}
              src={icono_borrar}
              alt="icono borrar"
            />{" "}
            <p>BORRAR</p>
          </span>
          <span
            onClick={() => setAbrirModal(true)}
            className={styles.borrar_editar}
          >
            <img
              className={styles.iconos}
              src={icono_editar}
              alt="icono editar"
            />{" "}
            <p>EDITAR</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default CardVideo;
