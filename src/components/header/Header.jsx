import styles from "./Header.module.scss"

export const Header = () =>{
    return(
        <div className={styles.header}>
            <div className={styles.logo}>IneVadim</div>
            <div className={styles.settings}>Settings</div>
        </div>
    )
}