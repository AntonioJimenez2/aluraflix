import styles from "./ListaOpciones.module.css";

const ListaOpciones = () => {
  const categorias = ["Frontend", "Backend", "Innovación y gestión"];
  return (
    <>
      <div className={styles.contenedor_categorias}>
        <label>Categoria</label>
        <select>
          {categorias.map((categoria, index) => (
            <option key={index}>{categoria}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ListaOpciones;
