import styles from "./ContenedorCards.module.css";
import TituloCategoria from "../TituloCategoria/";
import CardVideo from "../CardVideo/";

const ContenedorCards = (props) => {

  console.log(props.datos)
  const {titulo, color} = props.datos

  return (
    <>
      <section className={styles.contenedor}>
        <TituloCategoria titulo={titulo} color={color} />
        <section className={styles.contenedor_cards}>
          <CardVideo color={color} />
          <CardVideo color={color} />
          <CardVideo color={color} />
        </section>
      </section>
    </>
  );
};

export default ContenedorCards;
