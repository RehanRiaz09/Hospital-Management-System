const mongoose = require("mongoose");
const medRecordSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    require: true,
  },
  diagnosis: { type: String, require: true },
  treatment: { type: String, require: true },
  prescriptions: { type: String, require: true },
  test: { type: String, default: false },
  notes: { type: String, require: true },
});
module.exports = mongoose.model("MedicalRecord", medRecordSchema);
