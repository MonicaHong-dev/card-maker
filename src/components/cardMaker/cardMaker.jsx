import React from "react";
import styles from "./cardMaker.module.css";
import CardItem from "./../cardItem/cardItem";

const CardMaker = ({ columns, cards }) => {
  return (
    <section className={styles.edit}>
      <h1 className={styles.title}> Card Maker</h1>
      <ul>
        {cards.map((card) => (
          <CardItem columns={columns} card={card} />
        ))}
      </ul>
    </section>
  );
};
export default CardMaker;
