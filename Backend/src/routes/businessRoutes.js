import express from "express";
import { saveBusinessData, getBusinessData, getMessageTemplates, createTemplate, getTemplatesLibrary } from "../controllers/businessController.js";

const router = express.Router();

// Business data routes
router.post("/businessData", saveBusinessData);
router.post("/createTemplate", createTemplate);
router.get("/businessData", getBusinessData);
router.get("/viewTemplates", getMessageTemplates);
router.get("/templatesLibrary", getTemplatesLibrary);

export default router;
