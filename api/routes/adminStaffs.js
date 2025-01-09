const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
const AdminStaff = require("../model/adminstaff");
const {
  getAllAdminStaff,
  createAdminStaff,
  getAdminStaffById,
  updateAdminStaff,
  deleteAdminStaff,
} = require("../controller/adminstaffs");
routes.get("/", getAllAdminStaff);
routes.post("/", createAdminStaff);
routes.get("/:adminStaffId", getAdminStaffById);
routes.patch("/:adminStaffId", updateAdminStaff);
routes.delete("/:adminStaffId", deleteAdminStaff);
module.exports = routes;
