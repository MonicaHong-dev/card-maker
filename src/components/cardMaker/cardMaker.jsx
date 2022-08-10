import React from "react";
import styles from "./cardMaker.module.css";
import CardItem from "./../cardItem/cardItem";
import CardAdd from "../CardAdd/cardAdd";

const CardMaker = ({ cards, addCard }) => {
  return (
    <section className={styles.edit}>
      <h1 className={styles.title}> Card Maker</h1>
      <ul>
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </ul>
      <ul>
        <CardAdd addCard={addCard} />
      </ul>
    </section>
  );
};
export default CardMaker;
