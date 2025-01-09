const Doctor = require("../model/doctor");
const getAllDoctor = async (req, res, next) => {
  try {
    const docs = await Doctor.find().select(
      "name age IsMale phone email address specialization salary position"
    );
    res.status(200).json({
      count: docs.length,
      Doctor: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const createDoctor = async (req, res, next) => {
  try {
    const doctor = new Doctor({
      name: req.body.name,
      age: req.body.age,
      IsMale: req.body.IsMale,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      specialization: req.body.specialization,
      salary: req.body.salary,
      position: req.body.position,
    });
    const result = await doctor.save();
    console.log(result);
    res.status(200).json({
      message: "Create Doctor Successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getDoctorById = async (req, res, next) => {
  try {
    const id = req.params.doctorId;
    const doc = await Doctor.findById(id).select(
      "name age IsMale phone email address specialization salary position"
    );
    console.log(doc);
    if (doc) {
      res.status(200).json({
        doctor: doc,
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
const updateDoctor = async (req, res, next) => {
  try {
    const id = req.params.doctorId;
    Doctor.updateOne(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          IsMale: req.body.IsMale,
          phone: req.body.phone,
          email: req.body.email,
          address: req.body.address,
          specialization: req.body.specialization,
          salary: req.body.salary,
          position: req.body.position,
        },
      }
    );
    res.status(200).json({
      message: "Doctor Update",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const deleteDoctor = async (req, res, next) => {
  try {
    const id = req.params.doctorId;
    const result = await Doctor.deleteOne({ id: id });
    res.status(200).json({
      message: "Doctor Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
module.exports = {
  getAllDoctor,
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
