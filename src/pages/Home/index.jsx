import styles from "./Home.module.css";
import Banner from "./components/Banner";
import ContenedorCards from "./components/ContenedorCards";


const Home = () => {
  return (
    <>
    <main className={styles.contenedor_principal}>
      <Banner />
      <ContenedorCards />
      </main>
    </>
  );
};

export default Home;
