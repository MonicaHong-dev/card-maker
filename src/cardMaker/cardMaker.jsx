import React from "react";
import styles from "./cardMaker.module.css";
const CardMaker = (props) => {
  return (
    <section className={styles.edit}>
      <h1 className={styles.title}> Card Maker</h1>
      <div className={styles.body}></div>
    </section>
  );
};
export default CardMaker;
