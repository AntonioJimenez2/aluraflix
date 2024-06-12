import styles from "./Boton.module.css";

const Boton = props => {
  return (
    <>
      <button className={styles.boton}>{props.children} </button>
    </>
  );
};

export default Boton;
