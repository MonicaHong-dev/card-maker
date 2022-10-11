import { async } from "@firebase/util";
import { upload } from "@testing-library/user-event/dist/upload";
import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

// imageUploader.upload 메소드 실행 후 url와 image name을 가져와서 쓴다.
// name 이름이 있으면 있는 것을 버튼에 보여줌, 새로 change가 일어나면 새롭게 업로드 된 name으로 업데이트
// imageUploader는 이미지 업로드 후 결과 값으로 name과 url가져옴.
// onFileChange는 업로드 된 후 imageUploader로 부터 받은 name과 url을 가지고 프론트에 표현해 주기 위한 콜백
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  //input 버튼 접근
  const imageInput = useRef();

  //Loading spiner
  const [loading, setLoading] = useState(false);

  //버튼 클릭하면 input(type='file') 클릭 됨
  const onButtonClick = (event) => {
    event.preventDefault();
    imageInput.current.click();
  };

  //이미지 추가 되면 로딩스피너가 트루
  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
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

      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || "No file"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
