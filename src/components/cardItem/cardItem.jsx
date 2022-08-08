import React from "react";
import Button from "../button/button";
import styles from "./cardItem.module.css";
import ImageFileInput from "./../image/imageFileInput";

const CardItem = ({ card }) => {
  const { name, work, theme, position, email, memo, fileName, fileURL } = card;
  const onSubmit = () => {
    console.log("onSubmit");
  };
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input className={styles.input} type="text" name="work" value={work} />
      <select className={styles.select} type="text" name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="position" value={position} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea className={styles.textarea} type="text" name="memo" value={memo} />
      <div className={styles.fileInput}>
        <ImageFileInput className={styles.fileInput} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardItem;
