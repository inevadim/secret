import styles from "./Header.module.scss"
import imgSettings from "./../../assets/img/setting.svg"

export const Header = () =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.logo}>IneVadim</div>
                <div className={styles.settings}>
                    <img src={imgSettings} alt="settings"/>
                </div>
            </div>
            <div className={styles.toogleHeaderWrapper}>
                <div className={styles.toogleHeader}>
                    toogleHeader
                </div>
            </div>
        </div>
    )
}