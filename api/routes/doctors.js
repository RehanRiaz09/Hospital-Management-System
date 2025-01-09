const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
const Doctor = require("../model/doctor");
const {
  getAllDoctor,
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} = require("../controller/doctors");
const { getAdminStaffById } = require("../controller/adminstaffs");
routes.get("/", getAllDoctor);
routes.post("/", createDoctor);
routes.get("/:doctorId", getDoctorById);
routes.patch("/:doctorId", updateDoctor);
routes.delete("/:doctorId", deleteDoctor);

module.exports = routes;
