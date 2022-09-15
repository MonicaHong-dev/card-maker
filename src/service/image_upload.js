class ImageUploader {
  //file전달받아서 업로드 후 url과 파일 이름을 가지고 온다(asyncronous)
  async upload(file) {
    const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "docs_upload_example_us_preset");

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    return await res.json();
  }
}
export default ImageUploader;
