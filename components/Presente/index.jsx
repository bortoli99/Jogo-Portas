import styles from './style.module.css'

export default function Presente(){
    return (
        <div className={styles.presente}>
            <div className={styles.tampa}></div>
            <div className={styles.corpo}></div>
            <div className={styles.lacoHorizontal}></div>
            <div className={styles.lacoVertical}></div>
        </div>
    )
}