import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import Header from "./../header/header";
import Footer from "./../footer/footer";
import { useEffect } from "react";

const Login = ({ authService }) => {
  let navigate = useNavigate();
  const goToMain = (userId) => {
    navigate("/main", { state: { id: userId } });
    console.log(userId);
  };

  const onLogin = (event) => {
    console.log(event.currentTarget.textContent);
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMain(data.user.uid));
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMain(user);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              GitHub
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
