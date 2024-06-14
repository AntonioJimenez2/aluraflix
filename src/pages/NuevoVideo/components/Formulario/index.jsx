import CampoFormulario from "../CampoFormulario";
import styles from "./Formulario.module.css";
import ListaOpciones from "../ListaOpciones/";
import TextArea from "../TextArea/";

const Formulario = (props) => {
  return (
    <>
      <section className={styles.contenedor_formulario}>
        <h3>{props.titulo}</h3>
        <form>
          <CampoFormulario
            titulo="Titulo"
            placeholder="Ingrese el titulo..."
            name="titulo"
            type="text"
            required
          />
          <CampoFormulario
            titulo="Imagén"
            placeholder="Ingrese el enlace de la imagén..."
            name="imagen"
            type="url"
            required
          />
          <CampoFormulario
            titulo="Vídeo"
            placeholder="Ingrese el enlace del vídeo..."
            name="video"
            type="url"
            required
          />
          <ListaOpciones />
          <TextArea />
          
          <CampoFormulario type="submit" value="GUARDAR" />
          <CampoFormulario type="reset" value="LIMPIAR" />
          
        </form>
      </section>
    </>
  );
};

export default Formulario;
