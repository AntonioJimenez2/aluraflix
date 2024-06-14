import styles from "./Cabecera.module.css";
import logo from "./alura-logo.png";
import { Link, useLocation } from "react-router-dom";

const Cabecera = () => {
  const location= useLocation();

  const estiloBtnhome = location.pathname === "/" ? `${styles.boton_activo}` : `${styles.boton_inactivo}`
  const estiloBtnNuevo = location.pathname === "/nuevo-video" ? `${styles.boton_activo}` : `${styles.boton_inactivo}`

  return (
    <>
      <div className={styles.contenedor}>
        <img className={styles.logo} src={logo} alt="logo alura" />
        <nav>
          <Link to="/" className={estiloBtnhome}>HOME</Link>
          <Link to="/nuevo-video" className={estiloBtnNuevo}>NUEVO VIDEO </Link>
        </nav>
      </div>
    </>
  );
};

export default Cabecera
