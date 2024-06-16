import Formulario from "./components/Formulario";
import styles from "./NuevoVideo.module.css";
import TituloNuevoVideo from "./components/TituloNuevoVideo";

const NuevoVideo = () => {
  return (
    <>
      <main className={styles.contenedor_principal}>
        <TituloNuevoVideo />
        <Formulario titulo="Crear Tarjeta" />
      </main>
    </>
  );
};

export default NuevoVideo;
