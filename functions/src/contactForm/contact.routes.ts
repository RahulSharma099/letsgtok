import express from "express";
import { Request, Response } from "express";
import { contactSchema } from "./contact.schema";
import { validateRequest } from "../middlewares/validator.middleware";
import { submitFormData } from "./contact.controller";

const router = express.Router();

// 🚀 Route for submitting contact form data
router.post("/submit", validateRequest(contactSchema, "body"), submitFormData);

export default router;
