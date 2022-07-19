import React from "react";
import styles from "./login.module.css";

const Login = ({ googleLogIn }) => {
  return (
    <>
      <div className={styles.page}>
        <header>Login</header>
        <section className={styles.header}>
          <button onClick={() => googleLogIn()}>Google</button>
          <button>GitHub</button>
        </section>
        <footer>dreamCoding</footer>
      </div>
    </>
  );
};

export default Login;
