import styles from "./CampoFormulario.module.css"

const CampoFormulario = (props) => {
    return (
        <>
        <label for={props.name}>{props.titulo} </label>
        <input 
        id={props.name} 
        type={props.type} 
        placeholder={props.placeholder}>

        </input>
        </>
    )
}

export default CampoFormulario