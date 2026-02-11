import express from "express";
import { isAuth } from "../middlewares/auth.js";
import { getUserProfile, myProfile, updateUserProfile } from "../controllers/user.js";

const router = express.Router();

router.get("/me", isAuth, myProfile);
router.get("/:userId", isAuth, getUserProfile);
router.put("/update/profile", isAuth, updateUserProfile);

export default router;