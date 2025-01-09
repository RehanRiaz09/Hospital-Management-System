const Appointment = require("../model/appointment");
const getAllAppointment = async (req, res, next) => {
  try {
    const docs = await Appointment.find()
      .populate("patient doctor")
      .select("patient doctor date time purpose status");
    res.status(200).json({
      count: docs.length,
      Appointment: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const createAppointment = async (req, res, next) => {
  try {
    const appointment = new Appointment({
      patient: req.body.patient,
      doctor: req.body.doctor,
      date: req.body.date,
      time: req.body.time,
      purpose: req.body.purpose,
      status: req.body.status,
    });
    const result = await appointment.save();
    console.log(result);
    res.status(200).json({
      message: "Create Appointment Successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getAppointmentById = async (req, res, next) => {
  try {
    const id = req.params.appointmentId;
    const doc = await Appointment.findById(id)
      .populate("patient doctor")
      .select("patient doctor date time purpose status");
    console.log(doc);
    if (doc) {
      res.status(200).json({
        appointment: doc,
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
const updateAppointment = async (req, res, next) => {
  try {
    const id = req.params.appointmentId;
    Appointment.updateOne(
      { _id: id },
      {
        $set: {
          patient: req.body.patient,
          doctor: req.body.doctor,
          date: req.body.date,
          time: req.body.time,
          purpose: req.body.purpose,
          status: req.body.status,
        },
      }
    );
    res.status(200).json({
      message: "Appointment Update",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const deleteAppointment = async (req, res, next) => {
  try {
    const id = req.params.appointmentId;
    const result = await Appointment.deleteOne({ id: id });
    res.status(200).json({
      message: "Appointment Deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
module.exports = {
  getAllAppointment,
  createAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};
