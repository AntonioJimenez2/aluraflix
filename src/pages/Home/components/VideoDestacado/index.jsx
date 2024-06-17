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
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default VideoDestacado;
