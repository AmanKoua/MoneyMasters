import styles from "./Shelf.module.css";

const Shelf = ({ children }) => {
  return (
    <div className="mt-10 ">
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default Shelf;
