import express from "express";
import { researchCompany } from "../controllers/research.controller.js";

const router = express.Router();
router.post("/research", researchCompany);
export default router;