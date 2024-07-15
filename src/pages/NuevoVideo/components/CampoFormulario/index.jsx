import { useState } from "react";
import styles from "./CampoFormulario.module.css";

const CampoFormulario = (props) => {
  const [errores, setErrores] = useState(false);

  const {name, titulo, type, placeholder, valor, required, actualizarValor} =props

  const manejarCambio = (e) => {
    actualizarValor(e.target.value);
  };

  //verificar los errores
  const verificarInput = () => {
    const patronUrl = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
    
    if (type === 'text'){           
      if(valor.length < 3){
      setErrores(true); 
        actualizarValor("")
    } else {
     setErrores(false); 
    } }else  if (type === 'url'){
      if( patronUrl.test(valor)){
      setErrores(false);
    } else{
      setErrores(true);
        actualizarValor("")
    } }
  };


  const placeholderModificado = errores ? type === "text" ? "El nombre debe tener al menos 3 caracteres" : "Ingresa una url valida" : placeholder

  const claseErrores = errores ? styles.errores : "";


  return (
    <>
      <div className={styles.campo_formulario}>
        <label htmlFor={name}>{titulo} </label>
        <input
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

export default CampoFormulario;
