import Patient from "../models/patient";

/**
 * @desc Register a new patient
 * @route POST /api/patients
 */
export async function register(req, res) {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.validate(); // Validate the schema
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(400).json({ message: "Error registering patient", error: error.message });
    }
}

/**
 * @desc Get all patients
 * @route GET /api/patients
 */
export async function getAllPatients(req, res) {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: "Error fetching patients", error: error.message });
    }
}

/**
 * @desc Get a patient by ID
 * @route GET /api/patients/:id
 */
export async function getPatientById(req, res) {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: "Error fetching patient", error: error.message });
    }
}

/**
 * @desc Query patients with filters (e.g., name, age, gender)
 * @route GET /api/patients/query
 */
export async function queryPatients(req, res) {
    try {
        const filters = req.query; // Example: /api/patients/query?FirstName=John&Gender=Male
        const patients = await Patient.find(filters);
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: "Error filtering patients", error: error.message });
    }
}

/**
 * @desc Update a patient by ID
 * @route PUT /api/patients/:id
 */
export async function updatePatient(req, res) {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedPatient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(400).json({ message: "Error updating patient", error: error.message });
    }
}

/**
 * @desc Delete a patient by ID
 * @route DELETE /api/patients/:id
 */
export async function deletePatient(req, res) {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.status(200).json({ message: "Patient deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting patient", error: error.message });
    }
}
