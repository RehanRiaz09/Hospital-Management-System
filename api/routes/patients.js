const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
const Patient = require("../model/patient");
const {
  getAllPatient,
  createPatient,
  getPatientById,
  updatePatient,
  deletePatient,
} = require("../controller/patients");

routes.get("/", getAllPatient);
routes.post("/", createPatient);
routes.get("/:patientId", getPatientById);
routes.patch("/:patientId", updatePatient);
routes.delete("/:patientId", deletePatient);
module.exports = routes;
