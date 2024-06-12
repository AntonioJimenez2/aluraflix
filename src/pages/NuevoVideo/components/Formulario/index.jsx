import CampoFormulario from "../CampoFormulario"
import styles from "./Formulario.module.css"

const Formulario = () => {
    return (<>
        <section className={styles.contenedor_formulario}>
            <h3>Crear Tarjeta</h3>
            <form>
                <CampoFormulario 
                titulo="Titulo"
                placeholder="Ingrese el titulo..."
                name="titulo"
                type="text"
                />
                  <CampoFormulario 
                titulo="Imagén"
                placeholder="Ingrese el enlace de la imagén..."
                name="imagen"
                type="url"
                />



            </form>
        </section>
    </>)
}

export default Formulario