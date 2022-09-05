import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./cardItem.module.css";
import ImageFileInput from "./../image/imageFileInput";

const CardItem = ({ editCard, card, onDelete }) => {
  console.log(card);
  const formRef = useRef();
  const inputName = useRef();
  const inputWork = useRef();
  const inputTheme = useRef();
  const inputPosition = useRef();
  const inputEmail = useRef();
  const inputMemo = useRef();
  const { id, name, work, theme, position, email, memo, fileName, fileURL } = card;

  const onEdit = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    const editName = inputName.current.value;
    const editWork = inputWork.current.value;
    const editTheme = inputTheme.current.value;
    const editPosition = inputPosition.current.value;
    const editEmail = inputEmail.current.value;
    const editMemo = inputMemo.current.value;

    let editedCard = {
      id: id,
      name: editName,
      work: editWork,
      theme: editTheme,
      position: editPosition,
      email: editEmail,
      memo: editMemo,
      fileName: "logo.png",
      fileURL: "logo.png",
    };
    editCard(editedCard);
  };

  const onSumit = () => {
    onDelete(card);
  };
  return (
    <form onChange={onEdit} ref={formRef} className={styles.form}>
      <input
        onChange={onEdit}
        ref={inputName}
        className={styles.input}
        type="text"
        name="name"
        value={name}
      />
      <input
        onChange={onEdit}
        ref={inputWork}
        className={styles.input}
        type="text"
        name="work"
        value={work}
      />
      <select
        onChange={onEdit}
        ref={inputTheme}
        className={styles.select}
        type="text"
        name="theme"
        value={theme}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="default">default</option>
      </select>
      <input
        onChange={onEdit}
        ref={inputPosition}
        className={styles.input}
        type="text"
        name="position"
        value={position}
      />
      <input
        onChange={onEdit}
        ref={inputEmail}
        className={styles.input}
        type="text"
        name="email"
        value={email}
      />
      <textarea
        onChange={onEdit}
        ref={inputMemo}
        className={styles.textarea}
        type="text"
        name="memo"
        value={memo}
      />
      <div className={styles.fileInput}>
        <ImageFileInput className={styles.fileInput} />
      </div>
      <Button name="delete" onClick={onSumit} />
    </form>
  );
};

export default CardItem;
