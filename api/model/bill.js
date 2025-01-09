const mongoose = require("mongoose");
const billSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    require: true,
  },
  servicesRendered: { type: String, require: true },
  medications: { type: String, require: true },
  totalCost: { type: String, require: true },
  status: { type: String, require: true },
});
module.exports = mongoose.model("Bill", billSchema);
