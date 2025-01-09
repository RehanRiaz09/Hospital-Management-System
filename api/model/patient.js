const mongoose = require("mongoose");
const patientSchema = mongoose.Schema({
  name: { type: String, require: true },
  age: { type: Number, require: true },
  IsMale: { type: Boolean, default: true },
  phone: { type: String, require: true },
  email: { type: String },
  address: { type: String, require: true },
  medicalHistory: { type: String, require: true },
  insuranceInfo: { type: String, require: true },
});
module.exports = mongoose.model("Patient", patientSchema);
