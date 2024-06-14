import styles from "./ModalZoom.module.css";
import Formulario from "../../pages/NuevoVideo/components/Formulario/"

const ModalZoom = () => {
  return (
    <>
      <dialog open={true}>
        <Formulario />
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalZoom;
