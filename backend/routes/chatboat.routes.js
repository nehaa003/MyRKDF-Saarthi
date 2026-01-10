import express from "express";
import { chatMessage } from "../controllers/chatboat.message.js";

const router = express.Router();

router.post("/message", chatMessage);

export default router;
