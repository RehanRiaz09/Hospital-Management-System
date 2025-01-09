const MedRecord = require("../model/medRecord");
const getAllMedRecord = async (req, res, next) => {
  try {
    const docs = await MedRecord.find()
      .populate("patient")
      .select("patient diagnosis treatment prescriptions test notes");
    res.status(200).json({
      count: docs.length,
      MedRecord: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const createMedRecord = async (req, res, next) => {
  try {
    const medRecord = new MedRecord({
      patient: req.body.patient,
      diagnosis: req.body.diagnosis,
      treatment: req.body.treatment,
      prescriptions: req.body.prescriptions,
      test: req.body.test,
      notes: req.body.notes,
    });
    const result = await medRecord.save();
    console.log(result);
    res.status(200).json({
      message: "Create Medical Records Successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getMedRecordById = async (req, res, next) => {
  try {
    const id = req.params.medRecordId;
    const doc = await MedRecord.findById(id)
      .populate("patient")
      .select("patient diagnosis treatment prescriptions test notes");
    console.log(doc);
    if (doc) {
      res.status(200).json({
        medRecord: doc,
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
};
const updateMedRecord = async (req, res, next) => {
  try {
    const id = req.params.medRecordId;
    MedRecord.updateOne(
      { _id: id },
      {
        $set: {
          patient: req.body.patient,
          diagnosis: req.body.diagnosis,
          treatment: req.body.treatment,
          prescriptions: req.body.prescriptions,
          test: req.body.test,
          notes: req.body.notes,
        },
      }
    );
    res.status(200).json({
      message: "Medical Records Update",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const deleteMedRecord = async (req, res, next) => {
  try {
    const id = req.params.medRecordId;
    const result = await MedRecord.deleteOne({ id: id });
    res.status(200).json({
      message: "Medical Records Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
module.exports = {
  getAllMedRecord,
  createMedRecord,
  getMedRecordById,
  updateMedRecord,
  deleteMedRecord,
};
