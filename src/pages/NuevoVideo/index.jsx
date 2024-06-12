import Formulario from "./components/Formulario";
import styles from "./NuevoVideo.module.css";
import TituloNuevoVideo from "./components/TituloNuevoVideo";

const NuevoVideo = () => {
  return (
    <>
      <main className={styles.contenedor_principal} >
        <TituloNuevoVideo />
        <Formulario />
      </main>
    </>
  );
};

export default NuevoVideo;
