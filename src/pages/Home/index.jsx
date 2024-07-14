import { useContext, useEffect } from "react";
import styles from "./Home.module.css";
import Banner from "./components/Banner";
import ContenedorCards from "./components/ContenedorCards";
import { GlobalContext } from "../../context/GlobalContext";
import ModalEditar from "../../components/ModalEditar";
import SinVideos from "./components/SinVideos";

const Home = () => {
  //videos
  const { abrirModal, formRef, categorias, videos, setVideos } = useContext(GlobalContext);

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [setVideos])

  return (
    <>
      <main className={styles.contenedor_principal}>
        <Banner />
        <div ref={formRef}>
          {videos.length === 0 ? <SinVideos /> : 
          <>
          {categorias.map((categoria, index) => (
            <ContenedorCards datos={categoria} key={index} />
          ))} </>}
        </div>
        <div>{abrirModal && <ModalEditar />}</div>
      </main>
    </>
  );
};

export default Home;
