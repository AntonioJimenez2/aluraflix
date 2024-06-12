import styles from "./CardVideo.module.css";
import icono_borrar from "./icono_borrar.png"
import icono_editar from "./icono_editar.png"
import card_video from "./card_video.png"

const CardVideo = () => {
  return (
    <>
      <div className={styles.contenedor_card}>
        <img
          className={styles.imagen_video}
          src={card_video}
        />
        <div className={styles.contenedor_opciones}>
          <span className={styles.borrar_editar}>
            <img className={styles.iconos}
              src={icono_borrar}
              alt="icono borrar"
            />{" "}
            <p>BORRAR</p>
          </span>
          <span className={styles.borrar_editar}>
            <img className={styles.iconos}
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
