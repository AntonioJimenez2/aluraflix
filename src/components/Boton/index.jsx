import { Children } from "react"
import styles from "./Boton.module.css"

const Boton = ({children}) => {
    return (
        <>
        <button className={styles.boton}>{children} </button>
        
        </>
    )
}

export default Boton