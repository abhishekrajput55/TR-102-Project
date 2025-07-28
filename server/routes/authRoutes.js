// routes/authRoutes.js
import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { upload } from "../middleware/upload.js";

const router = Router();

router.post("/register", upload.single("document"), registerUser);
router.post("/login", loginUser);

export default router;
