import { useContext, useState } from "react";
import styles from "./ListaOpciones.module.css";
import { GlobalContext } from "../../../../context/GlobalContext";

const ListaOpciones = (props) => {
  const [errores, setErrores] = useState(false);
  
  const {actualizarCategoria, valor, required} = props

  const {categorias} = useContext(GlobalContext)

  const manejarCambio = (e) => {
    actualizarCategoria(e.target.value);
  };

  const verificarSelect = () => {          
      if(valor.length === 0){
      setErrores(true); 
      console.log(errores)
    } else {
     setErrores(false); 
    } 
  };

  const claseErrores = errores ? styles.errores : "";

  return (
    <>
      <div className={styles.contenedor_categorias}>
        <label>Categoria</label>
        <select value={valor} onChange={manejarCambio} required={required} className={claseErrores} onBlur={verificarSelect} >
          <option value="" disabled defaultValue="" hidden>
            Seleccione una categoría
          </option>
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria.titulo}>
              {categoria.titulo}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ListaOpciones;
