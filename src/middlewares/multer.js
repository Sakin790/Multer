import multer from "multer";
import path, { extname } from "path";
import { apiError } from "../utils/apiError.js";

const MAX_FILE_SIXE = 2097150;
const ALLOWED_FILE_FORMAT = ["jpg", "png", "jpeg"];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const filterFile = (req, res, cb) => {
  const extname = path.extname(file.originalname);
  if (!ALLOWED_FILE_FORMAT.includes(extname.substring(1))) {
    return new apiError(401, "Invalid photo format..!");
  }
  cb(null, true);
};

export const upload = multer({
  storage: storage,
  limits: MAX_FILE_SIXE,
  filterFile,
});
