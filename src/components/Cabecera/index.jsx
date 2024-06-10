import styles from "./Cabecera.module.css";
import logo from "./alura-logo.png";
import Boton from "../Boton";
import { Link } from "react-router-dom";

const Cabecera = () => {
  return (
    <>
      <div className={styles.contenedor}>
        <img className={styles.logo} src={logo} alt="logo alura" />
        <nav>
          <Link to="/" > <Boton>HOME</Boton> </Link>
          <Link to="/nuevo-video" > <Boton>NUEVO VÍDEO</Boton> </Link>
        </nav>
      </div>
    </>
  );
};

export default Cabecera
