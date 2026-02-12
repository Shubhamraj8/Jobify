import express from "express";
import { isAuth } from "../middlewares/auth.js";
import { addSkillToUser, deleteSkillFromUser, getUserProfile, myProfile, updateProfilePic, updateResume, updateUserProfile } from "../controllers/user.js";
import uploadFile from "../middlewares/multer.js";

const router = express.Router();

router.get("/me", isAuth, myProfile);
router.get("/:userId", isAuth, getUserProfile);
router.put("/update/profile", isAuth, updateUserProfile);
router.put("/update/pic", isAuth, uploadFile, updateProfilePic);
router.put("/update/resume", isAuth, uploadFile, updateResume);
router.post("/update/skills", isAuth, isAuth, addSkillToUser);
router.delete("/update/skills", isAuth, deleteSkillFromUser);

export default router;