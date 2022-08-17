import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./main.module.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CardMaker from "../components/cardMaker/cardMaker";
import CardPreview from "../components/cardPreview/cardPreview";

const Main = ({ authService }) => {
  const navigate = useNavigate();
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "monica",
      work: "Google",
      theme: "dark",
      position: "developer",
      email: "monicahong@gamil.com",
      memo: "Develop your dream",
      fileName: "logo.png",
      fileURL: null,
    },
    2: {
      id: 2,
      name: "ellie",
      work: "academy",
      theme: "default",
      position: "devOps",
      email: "ellieg@gamil.com",
      memo: "code your dream",
      fileName: "logo.png",
      fileURL: "logo.png",
    },
    3: {
      id: 3,
      name: "bob",
      work: "CBRE",
      theme: "light",
      position: "data analyst",
      email: "bobg@gamil.com",
      memo: "Data your dream",
      fileName: "logo.png",
      fileURL: null,
    },
  });

  const createOrUpdateCard = (card) => {
    // console.log(editedCard);
    // const notEdited = cards.filter((e) => e.id !== editedCard.id);
    // console.log(notEdited);
    // const editedCards = [...notEdited, editedCard];

    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      console.log(card.id);
      return updated;
    });
  };

  const onDelete = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      console.log(card.id);
      return updated;
    });
  };
  const onLogout = () => {
    authService.logout();
    // navigate("/");
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
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
