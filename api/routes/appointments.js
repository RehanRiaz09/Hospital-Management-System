const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
const Appointment = require("../model/appointment");
const {
  getAllAppointment,
  createAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = require("../controller/appointments");
const { getAdminStaffById } = require("../controller/adminstaffs");
routes.get("/", getAllAppointment);
routes.post("/", createAppointment);
routes.get("/:appointmentId", getAppointmentById);
routes.patch("/:appointmentId", updateAppointment);
routes.delete("/:appointmentId", deleteAppointment);
module.exports = routes;
