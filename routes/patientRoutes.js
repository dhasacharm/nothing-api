import express from "express";
import {
    register,
    getAllPatients,
    getPatientById,
    queryPatients,
    updatePatient,
    deletePatient,
} from "../controllers/patientController.js";

const router = express.Router();

router.post("/", register);               // Register a patient
router.get("/", getAllPatients);          // Get all patients
router.get("/query", queryPatients);      // Query patients (filter by name, gender, etc.)
router.get("/:id", getPatientById);       // Get patient by ID
router.put("/:id", updatePatient);        // Update patient by ID
router.delete("/:id", deletePatient);     // Delete patient by ID

export default router;
