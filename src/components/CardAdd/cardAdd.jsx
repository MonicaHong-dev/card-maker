import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./cardAdd.module.css";
import ImageFileInput from "./../image/imageFileInput";

const CardAdd = ({ addCard }) => {
  const formRef = useRef();
  const inputName = useRef();
  const inputWork = useRef();
  const inputTheme = useRef();
  const inputPosition = useRef();
  const inputEmail = useRef();
  const inputMemo = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const newName = inputName.current.value || "";
    const newWork = inputWork.current.value || "";
    const newTheme = inputTheme.current.value;
    const newPosition = inputPosition.current.value || "";
    const newEmail = inputEmail.current.value || "";
    const newMemo = inputMemo.current.value || "";

    let newCard = {
      id: Date.now(),
      name: newName,
      work: newWork,
      theme: newTheme,
      position: newPosition,
      email: newEmail,
      memo: newMemo,
      fileName: "logo.png",
      fileURL: "logo.png",
    };

    formRef.current.reset();
    addCard(newCard);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input ref={inputName} className={styles.input} type="text" name="name" placeholder="name" />
      <input ref={inputWork} className={styles.input} type="text" name="work" placeholder="work" />
      <select
        ref={inputTheme}
        className={styles.select}
        type="text"
        name="theme"
        placeholder="theme"
      >
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="default">default</option>
      </select>
      <input
        ref={inputPosition}
        className={styles.input}
        type="text"
        name="position"
        placeholder="position"
      />
      <input
        ref={inputEmail}
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
      />
      <textarea
        ref={inputMemo}
        className={styles.textarea}
        type="text"
        name="memo"
        placeholder="memo"
      />
      <div className={styles.fileInput}>
        <ImageFileInput className={styles.fileInput} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAdd;
