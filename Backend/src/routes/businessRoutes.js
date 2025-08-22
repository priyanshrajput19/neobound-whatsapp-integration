import express from "express";
import { saveBusinessData, getBusinessData, getMessageTemplates } from "../controllers/businessController.js";

const router = express.Router();

// Business data routes
router.post("/businessData", saveBusinessData);
router.get("/businessData", getBusinessData);
router.get("/viewTemplates", getMessageTemplates);

export default router;
