import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";
import ImageUploader from "./service/image_upload";
import ImageFileInput from "./components/image/image_file_input";
import CardRepository from "./service/card_repository";

const cardRepository = new CardRepository(firebaseApp);
const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();

// const FileInput = <ImageFileInput imageUploader = {imageUploader} />
//이벤트와 같은 추가적인 props를 전달할 수 있도록 확장성을 고려
const FileInput = (props) => <ImageFileInput {...props} imageUploader={imageUploader} />;
let name = "";
const onfileChange = (name) => console.log(name);
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById("root")
);

//component prop은 대문자로 시작함
