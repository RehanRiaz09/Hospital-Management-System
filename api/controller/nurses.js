const Nurse = require("../model/nurse");
const getAllNurse = async (req, res, next) => {
  try {
    const docs = await Nurse.find().select(
      "name age IsMale phone email address shift salary position"
    );
    res.status(200).json({
      count: docs.length,
      Nurse: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const createNurse = async (req, res, next) => {
  try {
    const nurse = new Nurse({
      name: req.body.name,
      age: req.body.age,
      IsMale: req.body.IsMale,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      shift: req.body.shift,
      salary: req.body.salary,
      position: req.body.position,
    });
    const result = await nurse.save();
    console.log(result);
    res.status(200).json({
      message: "Create Nurse Successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getNurseById = async (req, res, next) => {
  try {
    const id = req.params.nurseId;
    const doc = await Nurse.findById(id).select(
      "name age IsMale phone email address shift salary position"
    );
    console.log(doc);
    if (doc) {
      res.status(200).json({
        nurse: doc,
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
const updateNurse = async (req, res, next) => {
  try {
    const id = req.params.nurseId;
    Nurse.updateOne(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          IsMale: req.body.IsMale,
          phone: req.body.phone,
          email: req.body.email,
          address: req.body.address,
          shift: req.body.shift,
          salary: req.body.salary,
          position: req.body.position,
        },
      }
    );
    res.status(200).json({
      message: "Nurse Update",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const deleteNurse = async (req, res, next) => {
  try {
    const id = req.params.nurseId;
    const result = await Nurse.deleteOne({ id: id });
    res.status(200).json({
      message: "Nurse Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
module.exports = {
  getAllNurse,
  createNurse,
  getNurseById,
  updateNurse,
  deleteNurse,
};
