import styles from "./Pie.module.css";
import logo from "./alura-logo.png";

const Pie = () => {
  return (
    <>
      <footer className={styles.pie}>
        <img src={logo} alt="logo alura" />
        <p>Creado por Antonio Jiménez - Alura-ONE 2024</p>
      </footer>
    </>
  );
};

export default Pie;
