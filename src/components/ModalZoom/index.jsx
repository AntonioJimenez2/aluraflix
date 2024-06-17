import styles from "./ModalZoom.module.css";
import Formulario from "../../pages/NuevoVideo/components/Formulario/";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ModalZoom = () => {

  const {abrirModal, setAbrirModal} = useContext(GlobalContext)

  return (
    <>
      <dialog className={styles.contenedor_modal} open={abrirModal}>
        <Formulario titulo="EDITAR CARD" />

        <form className={styles.contenedor_boton} method="dialog">
          <button>
            <img onClick={()=>setAbrirModal(false)} src="/img/cancel.png" alt="cancelar" />
          </button>
        </form>
      </dialog>
    </>
  );
};

export default ModalZoom;
