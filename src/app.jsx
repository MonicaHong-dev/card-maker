import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/main";

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index exact element={<Login authService={authService} />} />
          <Route
            path="main"
            element={
              <Main
                FileInput={FileInput}
                authService={authService}
                cardRepository={cardRepository}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
