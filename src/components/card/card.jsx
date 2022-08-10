import React, { ReactDOM } from "react";
import styles from "./card.module.css";
const Card = ({ key, card }) => {
  const DEFAULT_IMAGE = "images/default_logo.png";
  const { name, work, theme, position, email, memo, fileName, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  themePick(theme);

  return (
    <li className={`${styles.card} ${color}`} key={key}>
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
let color = "";
function themePick(theme) {
  switch (theme) {
    case "dark":
      return (color = styles.dark);

    case "light":
      return (color = styles.light);

    case "default":
      return (color = styles.default);

    default:
      throw new Error(`unknown theme: ${theme}`);
      ReactDOM.render(<Card />);
  }
}
export default Card;
