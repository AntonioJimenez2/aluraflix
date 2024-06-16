import styles from "./VideoDestacado.module.css";

const VideoDestacado = () => {
  return (
    <>
      <iframe
        className={styles.contenedor_video}
        width="648"
        height="334"
        src="https://www.youtube.com/embed/KSyqCUAr2CU?si=QbzCMGpGzQefEOKL"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default VideoDestacado;
