const Patient = require("../model/patient");
const getAllPatient = async (req, res, next) => {
  try {
    const docs = await Patient.find().select(
      "name age IsMale phone email address medicalHistory InsuranceInfo"
    );

    res.status(200).json({
      count: docs.length,
      Patient: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err || "server error",
    });
  }
};
const createPatient = async (req, res, next) => {
  try {
    const patient = new Patient({
      name: req.body.name,
      age: req.body.age,
      IsMale: req.body.IsMale,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      medicalHistory: req.body.medicalHistory,
      insuranceInfo: req.body.insuranceInfo,
    });
    const result = await patient.save();

    console.log(result);
    res.status(200).json({
      message: "create Patient successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getPatientById = async (req, res, next) => {
  {
    try {
      const id = req.params.patientId;
      const doc = await Patient.findById(id).select(
        "name age IsMale phone email address medicalHistory insuranceInfo"
      );
      console.log(doc);
      if (doc) {
        res.status(200).json({
          patient: doc,
        });
      } else {
        res.status(404).json({
          message: "No valid entry found for this provide ID",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }
};
const updatePatient = async (req, res, next) => {
  {
    try {
      const id = req.params.patientId;
      Patient.updateOne(
        { _id: id },
        {
          $set: {
            name: req.body.name,
            age: req.body.age,
            IsMale: req.body.IsMale,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            medicalHistory: req.body.medicalHistory,
            insuranceInfo: req.body.insuranceInfo,
          },
        }
      );

      res.status(200).json({
        message: "Patient update",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }
};
const deletePatient = async (req, res, next) => {
  {
    try {
      const id = req.params.patientId;
      const result = await Patient.deleteOne({ _id: id });

      res.status(200).json({
        message: "Patient Deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }
};
module.exports = {
  getAllPatient,
  createPatient,
  getPatientById,
  updatePatient,
  deletePatient,
};
