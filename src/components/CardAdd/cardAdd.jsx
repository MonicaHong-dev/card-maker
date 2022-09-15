import React, { useRef, useState } from "react";
import Button from "../button/button";
import styles from "./cardAdd.module.css";

const CardAdd = ({ FileInput, addCard }) => {
  const formRef = useRef();
  const inputName = useRef();
  const inputWork = useRef();
  const inputTheme = useRef();
  const inputPosition = useRef();
  const inputEmail = useRef();
  const inputMemo = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newName = inputName.current.value || "";
    const newWork = inputWork.current.value || "";
    const newTheme = inputTheme.current.value;
    const newPosition = inputPosition.current.value || "";
    const newEmail = inputEmail.current.value || "";
    const newMemo = inputMemo.current.value || "";
    const fileName = file.fileName || "";
    const fileURL = file.fileURL || "";

    let newCard = {
      id: Date.now(),
      name: newName,
      work: newWork,
      theme: newTheme,
      position: newPosition,
      email: newEmail,
      memo: newMemo,
      fileName: fileName,
      fileURL: fileURL,
    };

    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
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
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAdd;
