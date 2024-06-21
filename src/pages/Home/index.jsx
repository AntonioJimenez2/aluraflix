import { useContext } from "react";
import styles from "./Home.module.css";
import Banner from "./components/Banner";
import ContenedorCards from "./components/ContenedorCards";
import { GlobalContext } from "../../context/GlobalContext";
import ModalEditar from "../../components/ModalEditar";

const Home = () => {
  //videos
  const { abrirModal, formRef } = useContext(GlobalContext);

  // lista categorias
  const categorias = [
    {
      titulo: "Frontend",
      color: "#6BD1FF",
    },
    {
      titulo: "Backend",
      color: "#00C86F",
    },
    {
      titulo: "Innovación y gestión",
      color: "#FFBA05",
    },
  ];

  return (
    <>
      <main className={styles.contenedor_principal}>
        <Banner />
        <div ref={formRef}>
          {categorias.map((categoria, index) => (
            <ContenedorCards datos={categoria} key={index} />
          ))}
        </div>
        <div>{abrirModal && <ModalEditar />}</div>
      </main>
    </>
  );
};

export default Home;
