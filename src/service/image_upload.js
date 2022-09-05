import { cloudinary } from "cloudinary";

cloudinary.config({
  secure: true,
});

console.log(cloudinary.config());
