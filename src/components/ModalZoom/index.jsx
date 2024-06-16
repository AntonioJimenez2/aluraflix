import styles from "./ModalZoom.module.css";
import Formulario from "../../pages/NuevoVideo/components/Formulario/";

const ModalZoom = () => {
  return (
    <>
      <dialog className={styles.contenedor_modal} open={false}>
        <Formulario titulo="EDITAR CARD" />

        <form className={styles.contenedor_boton} method="dialog">
          <button>
            <img src="/img/cancel.png" alt="cancelar" />
          </button>
        </form>
      </dialog>
    </>
  );
};

export default ModalZoom;
