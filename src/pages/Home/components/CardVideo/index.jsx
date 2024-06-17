import styles from "./CardVideo.module.css";
import icono_borrar from "./icono_borrar.png";
import icono_editar from "./icono_editar.png";
import card_video from "./card_video.png";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";

const CardVideo = (props) => {

  const {setAbrirModal} = useContext(GlobalContext)
  

  return (
    <>
      <div className={styles.contenedor_card} style={{borderColor: props.color }} >
        <img
          className={styles.imagen_video}
          src={card_video}
          alt="portada card"
        />
        <div className={styles.contenedor_opciones} style={{borderColor: props.color}}>
          <span className={styles.borrar_editar}>
            <img
              className={styles.iconos}
              src={icono_borrar}
              alt="icono borrar"
            />{" "}
            <p>BORRAR</p>
          </span>
          <span onClick={()=>setAbrirModal(true)} className={styles.borrar_editar}>
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
