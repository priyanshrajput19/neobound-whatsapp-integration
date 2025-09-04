import express from "express";
import { saveBusinessData, getBusinessData, getMessageTemplates, makeTemplate, getTemplatesLibrary, getBusinessPhoneNumber } from "../controllers/businessController.js";

const router = express.Router();

// Business data routes
router.post("/businessData", saveBusinessData);
router.post("/createTemplate", makeTemplate);
router.get("/businessData", getBusinessData);
router.get("/viewTemplates", getMessageTemplates);
router.get("/templatesLibrary", getTemplatesLibrary);
router.get("/businessPhoneNumber", getBusinessPhoneNumber);

export default router;
