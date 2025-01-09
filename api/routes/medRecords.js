const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
const MedRecord = require("../model/medRecord");
const {
  getAllMedRecord,
  createMedRecord,
  getMedRecordById,
  updateMedRecord,
  deleteMedRecord,
} = require("../controller/medRecords");
routes.get("/", getAllMedRecord);
routes.post("/", createMedRecord);
routes.get("/:medRecordId", getMedRecordById);
routes.patch("/:medRecordId", updateMedRecord);
routes.delete("/:medRecordId", deleteMedRecord);

module.exports = routes;
