import styles from "./Drawer.module.css";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
const Drawer = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/home">
        <Shelf>HOME</Shelf>
      </Link>
      <Shelf>MODULES</Shelf>
      <Shelf>PORTFOLIO</Shelf>
      <Shelf>LEADERBOARD</Shelf>
      <Shelf>COMMUNITY</Shelf>
      <Link to="/aboutus">
        <Shelf>ABOUT US</Shelf>
      </Link>
    </div>
  );
};

export default Drawer;
