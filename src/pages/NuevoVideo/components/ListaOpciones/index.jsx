import styles from "./ListaOpciones.module.css";

const ListaOpciones = (props) => {
  const categorias = ["Frontend", "Backend", "Innovación y gestión"];

  const manejarCambio = (e) => {
    props.actualizarCategoria(e.target.value);
  };

  return (
    <>
      <div className={styles.contenedor_categorias}>
        <label>Categoria</label>
        <select value={props.valor} onChange={manejarCambio}>
          <option value="" disabled defaultValue="" hidden>
            Seleccione una categoría
          </option>
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ListaOpciones;
