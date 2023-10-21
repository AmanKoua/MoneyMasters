import styles from './Shelf.module.css'
export const Shelf = ({children}) => {
    return(
        <div className={styles.shelfcontainer}>
            <p className={styles.text}>{children}</p>
        </div>
    )
}
