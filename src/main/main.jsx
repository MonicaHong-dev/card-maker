import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./main.module.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CardMaker from "./../cardMaker/cardMaker";
import CardPreview from "./../cardPreview/cardPreview";

const Main = ({ authService }) => {
  const navigate = useNavigate();
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
      <section className={styles.section}>
        <Header onLogout={onLogout} />
        <body className={styles.body}>
          <CardMaker />
          <CardPreview />
        </body>
        <Footer />
      </section>
    </>
  );
};

export default Main;
