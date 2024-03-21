import { User } from "../models/userModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";

const register = asyncHandler(async (req, res) => {
  const { avatar } = req.body;
  
  res.status(200).json({
    message: "OK",
  });
});

export { register };
