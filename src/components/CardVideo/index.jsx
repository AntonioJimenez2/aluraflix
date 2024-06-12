import styles from "./CardVideo.module.css";

const CardVideo = () => {
  return (
    <>
      <div className={styles.contenedor_card}>
        <img
          className={styles.imagen_video}
          src="https://pbs.twimg.com/media/GPwERhHXsAAt-G0?format=png&name=small"
        />
        <div className={styles.contenedor_opciones}>
          <span className={styles.borrar_editar}>
            <img
              src="https://pbs.twimg.com/media/?format=jpg&name=large"
              alt="icono borrar"
            />{" "}
            <p>BORRAR</p>
          </span>
          <span className={styles.borrar_editar}>
            <img
              src="https://pbs.twimg.com/media/?format=jpg&name=large"
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
