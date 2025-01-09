const mongoose = require("mongoose");
const adminstaffSchema = mongoose.Schema({
  name: { type: String, require: true },
  phone: { type: String, require: true },
  email: { type: String },
  address: { type: String, require: true },
  department: { type: String, require: true },
  salary: { type: String, require: true },
  position: { type: String, require: true },
});
module.exports = mongoose.model("AdminStaff", adminstaffSchema);
