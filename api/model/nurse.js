const mongoose = require("mongoose");
const nurseSchema = mongoose.Schema({
  name: { type: String, require: true },
  age: { type: Number, require: true },
  IsMale: { type: Boolean, default: true },
  phone: { type: String, require: true },
  email: { type: String },
  address: { type: String, require: true },
  shift: { type: String, require: true },
  salary: { type: String, require: true },
  position: { type: String, require: true },
});
module.exports = mongoose.model("Nurse", nurseSchema);
