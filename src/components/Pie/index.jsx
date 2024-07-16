import styles from "./Pie.module.css";
import logo from "../../assets/img/logo_black.png";
import { FaLinkedin } from "react-icons/fa";

const Pie = () => {
  return (
    <>
      <footer className={styles.pie}>
        <img src={logo} alt="logo alura" />
        <p>Creado por Antonio Jiménez  <a href="https://www.linkedin.com/in/juan-antonio-jimenez-orozco/" target="_blank" ><FaLinkedin /></a>  - Alura-ONE 2024</p>
        
      </footer>
    </>
  );
};

export default Pie;
