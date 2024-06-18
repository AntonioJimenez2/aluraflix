import styles from "./Home.module.css";
import Banner from "./components/Banner";
import ContenedorCards from "./components/ContenedorCards";

const Home = () => {
  // lista categorias
  const categorias = [
    {
      titulo: "Frontend",
      color: "#6BD1FF"
    },
    {
      titulo: "Backend",
      color: "#00C86F"
    },
    {
      titulo: "Innovación y gestión",
      color: "#FFBA05"
    }
  ];

  return (
    <>
      <main className={styles.contenedor_principal}>
        <Banner />

        {categorias.map((categoria, index) => (
          <ContenedorCards datos={categoria} key={index} />
        ))}

      </main>
    </>
  );
};

export default Home;