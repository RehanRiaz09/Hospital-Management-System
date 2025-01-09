const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const patientRouter = require("./api/routes/patients");
const stafftRouter = require("./api/routes/staffs");
const adminStafftRouter = require("./api/routes/adminStaffs");
const doctortRouter = require("./api/routes/doctors");
const nurseRouter = require("./api/routes/nurses");
const appointmentRouter = require("./api/routes/appointments");
const medRecordRouter = require("./api/routes/medRecords");
const inventoryRouter = require("./api/routes/Inventorys");
const billRouter = require("./api/routes/bills");

mongoose.connect("mongodb://127.0.0.1:27017/hospitaldb");
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.use("/patient", patientRouter);
app.use("/staff", stafftRouter);
app.use("/adminStaff", adminStafftRouter);
app.use("/doctor", doctortRouter);
app.use("/nurse", nurseRouter);
app.use("/appointment", appointmentRouter);
app.use("/medRecord", medRecordRouter);
app.use("/inventory", inventoryRouter);
app.use("/bill", billRouter)

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;