import styles from "./Banner.module.css";
import TituloYDescripcion from "../TituloYDescripcion/";
import VideoDestacado from "../VideoDestacado/";
import TituloCategoria from "../TituloCategoria/";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";

const Banner = () => {
  const { videoSeleccionado, videoRef } = useContext(GlobalContext);

  const { titulo, descripcion, categoria, video_url } = videoSeleccionado;
  let color;
  if (categoria === "Backend") {
    color = "#00C86F";
  } else if (categoria === "Frontend") {
    color = "#6BD1FF";
  } else if (categoria === "Innovación y gestión") {
    color = "#FFBA05";
  } else {
    color = "#2271d1"
  }

  return (
    <>
      <div className={styles.contenedor} ref={videoRef}>
        <div className={styles.box_titulos}  >
          <TituloCategoria categoria={categoria} color={color} />
          <TituloYDescripcion titulo={titulo} descripcion={descripcion} />
        </div>
        <div className={styles.box_video}>
        <VideoDestacado
          
          video={video_url}
          color={color}
          
        /></div>
      </div>
    </>
  );
};

export default Banner;
