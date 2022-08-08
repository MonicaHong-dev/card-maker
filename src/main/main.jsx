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
  const columns = ["name", "work", "theme", "position", "email", "memo", "fileName", "fileURL"];
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);

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
          <CardMaker columns={columns} cards={cards} />
          <CardPreview cards={cards} />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Main;
