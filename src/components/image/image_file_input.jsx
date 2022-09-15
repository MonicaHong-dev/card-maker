import { async } from "@firebase/util";
import { upload } from "@testing-library/user-event/dist/upload";
import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

//imageUploader.upload 메소드 실행 후 url와 imag name을 가져와서 쓴다.
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const imageInput = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    imageInput.current.click();
  };

  const onChange = async (event) => {
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={imageInput}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />

      <button className={styles.button} onClick={onButtonClick}>
        {name || "No file"}
      </button>
    </div>
  );
};

export default ImageFileInput;
