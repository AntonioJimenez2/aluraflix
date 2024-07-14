import styles from "./SinVideos.module.css"
import noVideo from "./sin_videos.png"

const SinVideos = () =>{
    return (
        <div className={styles.sin_videos} >
            <h2>No se encontró ningún vídeo</h2>
            <img src={noVideo} alt="ningun video" />
        </div>
    )
}

export default SinVideos;