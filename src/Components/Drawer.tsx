import styles from "./Drawer.module.css";
import Shelf from "./Shelf";
const Drawer = () => {
  return (
    <div className={styles.navbar}>
      <Shelf>HOME</Shelf>
      <Shelf>MODULES</Shelf>
      <Shelf>PORTFOLIO</Shelf>
      <Shelf>LEADERBOARD</Shelf>
      <Shelf>COMMUNITY</Shelf>
      <Shelf>ABOUT US</Shelf>
    </div>
  );
};

export default Drawer;
