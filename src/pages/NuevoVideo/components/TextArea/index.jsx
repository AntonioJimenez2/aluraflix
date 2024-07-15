import { useState } from "react";
import styles from "./TextArea.module.css";

const TextArea = (props) => {
  const [errores, setErrores] = useState(false); 

    const {actualizarValor, name, titulo, type, placeholder, valor, required} = props

  const manejarCambio = (e) => {
    actualizarValor(e.target.value);
  };

  //verificar errores
  const verificarInput = () => {         
      if(valor.length < 5){
      setErrores(true); 
        actualizarValor("")
    } else {
     setErrores(false); 
    } 
  };

  const placeholderModificado = errores ? "La descripción debe tener al menos 5 caracteres" : placeholder

  const claseErrores = errores ? styles.errores : "";

  return (
    <>
      <div className={styles.contenedor_descripcion}>
        <label htmlFor={name}>{titulo} </label>
        <textarea
          id={name}
          type={type}
          placeholder={placeholderModificado}
          value={valor}
          required={required}
          onChange={manejarCambio}
          onBlur={verificarInput}
          className={claseErrores}
        />
      </div>
    </>
  );
};

export default TextArea;
