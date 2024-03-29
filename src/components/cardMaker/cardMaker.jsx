import React from "react";
import styles from "./cardMaker.module.css";
import CardItem from "./../cardItem/cardItem";
import CardAdd from "../CardAdd/cardAdd";

const CardMaker = ({ FileInput, cards, editCard, addCard, onDelete }) => {
  return (
    <section className={styles.edit}>
      <h1 className={styles.title}> Card Maker</h1>
      <ul>
        {Object.keys(cards).map(
          (key) => (
            console.log(typeof key),
            (
              <CardItem
                key={key}
                FileInput={FileInput}
                editCard={editCard}
                card={cards[key]}
                onDelete={onDelete}
              />
            )
          )
        )}
      </ul>
      <ul>
        <CardAdd FileInput={FileInput} addCard={addCard} />
      </ul>
    </section>
  );
};
export default CardMaker;
