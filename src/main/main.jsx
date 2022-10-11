import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./main.module.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CardMaker from "../components/cardMaker/cardMaker";
import CardPreview from "../components/cardPreview/cardPreview";
import CardRepository from "./../service/card_repository";
import { remove } from "firebase/database";

const Main = ({ FileInput, authService, cardRepository }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const [cards, setCards] = useState({});

  const createOrUpdateCard = (card) => {
    // console.log(editedCard);
    // const notEdited = cards.filter((e) => e.id !== editedCard.id);
    // console.log(notEdited);
    // const editedCards = [...notEdited, editedCard];

    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      console.log("card.id?", card.id);
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const onDelete = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      console.log(card.id);
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };
  const onLogout = () => {
    authService.logout();
    // navigate("/");
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        console.log("user?", user);
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  });

  return (
    <>
      <section className={styles.maker}>
        <Header onLogout={onLogout} />
        <div className={styles.container}>
          <CardMaker
            FileInput={FileInput}
            cards={cards}
            editCard={createOrUpdateCard}
            addCard={createOrUpdateCard}
            onDelete={onDelete}
          />
          <CardPreview cards={cards} />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Main;
