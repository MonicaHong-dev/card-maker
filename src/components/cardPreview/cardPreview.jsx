import React from "react";
import Card from "../card/card";
import styles from "./cardPreview.module.css";

const CardPreview = ({ cards }) => {
  console.log(cards);
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}> Card Preview</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default CardPreview;
