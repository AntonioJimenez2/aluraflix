import styles from "./Banner.module.css";
import TituloYDescripcion from "../TituloYDescripcion/";
import VideoDestacado from "../VideoDestacado/";
import TituloCategoria from "../TituloCategoria/";

const Banner = () => {
  return (
    <>
      <div className={styles.contenedor}>
        <div>
          <TituloCategoria />
        <TituloYDescripcion />
        </div>
        <VideoDestacado />
      </div>
    </>
  );
};

export default Banner;
