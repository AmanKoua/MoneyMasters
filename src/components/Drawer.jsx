
import styles from './NavBar.module.css'
import { Shelf } from "./Shelf"
export const NavBar = () => {
    return(
        <div className={styles.navbar}>
            <Shelf>HOME</Shelf>
            <Shelf>MODULES</Shelf>
            <Shelf>PORTFOLIO</Shelf>
            <Shelf>LEADERBOARD</Shelf>
            <Shelf>COMMUNITY</Shelf>
            <Shelf>ABOUT US</Shelf>
        </div>
    )
}

