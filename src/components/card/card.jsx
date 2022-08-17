import React, { ReactDOM } from "react";
import styles from "./card.module.css";
const Card = ({ card }) => {
  const DEFAULT_IMAGE = "images/default_logo.png";
  const { name, work, theme, position, email, memo, fileName, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${themePick(theme)}`}>
      <img className={styles.avatar} src={url} alt={fileName} />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.work}>{work}</p>
        <p className={styles.position}>{position}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.memo}>{memo}</p>
      </div>
    </li>
  );
};
// let color = "";
function themePick(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;

    case "light":
      return styles.light;

    case "default":
      return styles.default;

    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}
export default Card;
