import express from "express";
import { register } from "../controllers/user.controller.js";
import { upload, checkFileSize } from "../middlewares/multer.js";
const router = express.Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  checkFileSize,
  register
);

export { router };
