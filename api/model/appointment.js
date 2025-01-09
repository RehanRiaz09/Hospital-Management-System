const mongoose = require("mongoose");
const appointmentSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    require: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    require: true,
  },
  date: { type: Date, require: true },
  time: { type: String, require: true },
  purpose: { type: String, require: true },
  status: { type: String, require: true },
});
module.exports = mongoose.model("Appointment", appointmentSchema);
