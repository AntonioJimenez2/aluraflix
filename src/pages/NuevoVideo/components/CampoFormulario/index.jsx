import styles from "./CampoFormulario.module.css";

const CampoFormulario = props => {
  return (
    <>
      <div className={styles.campo_formulario}>
        <label htmlFor={props.name}>{props.titulo} </label>
        <input
          id={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.required}
        />
      </div>
    </>
  );
};

export default CampoFormulario;
