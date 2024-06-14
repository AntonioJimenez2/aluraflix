import styles from "./TextArea.module.css";

const TextArea = () => {
  return (
    <>
      <div className={styles.contenedor_descripcion}>
        <label>Descripción</label>
        <textarea />
      </div>
    </>
  );
};

export default TextArea;
