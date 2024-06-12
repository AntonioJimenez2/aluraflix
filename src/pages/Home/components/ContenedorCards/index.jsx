import styles from "./ContenedorCards.module.css"
import TituloCategoria from "../TituloCategoria/";
import CardVideo from "../CardVideo/";

const ContenedorCards = () => {
  return (
    <>
      <section className={styles.contenedor}>
        <TituloCategoria />
        <section className={styles.contenedor_cards}>
          <CardVideo />
          <CardVideo />
          <CardVideo />
        </section>
      </section>
    </>
  );
};

export default ContenedorCards;
