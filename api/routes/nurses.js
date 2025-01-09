const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
const Nurse = require("../model/nurse");
const {
  getAllNurse,
  createNurse,
  getNurseById,
  updateNurse,
  deleteNurse,
} = require("../controller/nurses");

routes.get("/", getAllNurse);
routes.post("/", createNurse);
routes.get("/:staffId", getNurseById);
routes.patch("/:staffId", updateNurse);
routes.delete("/:staffId", deleteNurse);

module.exports = routes;
