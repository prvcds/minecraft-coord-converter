import express from "express";
import { convertCoords, getHistory } from "../controllers/conversionController.js";

const router = express.Router();

router.post("/convert", convertCoords);
router.get("/history", getHistory);

export default router;
