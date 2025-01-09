const AdminStaff = require("../model/adminstaff");
const getAllAdminStaff = async (req, res, next) => {
  try {
    const docs = await AdminStaff.find().select(
      "name phone email address department salary position"
    );

    res.status(200).json({
      count: docs.length,
      AdminStaff: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err || "server error",
    });
  }
};
const createAdminStaff = async (req, res, next) => {
  try {
    const adminstaff = new AdminStaff({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      department: req.body.department,
      salary: req.body.salary,
      position: req.body.position,
    });
    const result = adminstaff.save();

    console.log(result);
    res.status(200).json({
      message: "create Administrative Staff successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
const getAdminStaffById = async (req, res, next) => {
  {
    try {
      const id = req.params.adminStaffId;
      const doc = await AdminStaff.findById(id).select(
        "name phone email address department salary position"
      );
      console.log(doc);
      if (doc) {
        res.status(200).json({
          adminStaff: doc,
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
const updateAdminStaff = async (req, res, next) => {
  {
    try {
      const id = req.params.adminStaffId;
      AdminStaff.updateOne(
        { _id: id },
        {
          $set: {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            department: req.body.department,
            salary: req.body.salary,
            position: req.body.position,
          },
        }
      );

      res.status(200).json({
        message: "Administrative Staff Updated",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
  }
};
const deleteAdminStaff = async (req, res, next) => {
  {
    try {
      const id = req.params.adminStaffId;
      const result = await AdminStaff.deleteOne({ _id: id });

      res.status(200).json({
        message: "Administrative Staff Deleted",
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
  getAllAdminStaff,
  createAdminStaff,
  getAdminStaffById,
  updateAdminStaff,
  deleteAdminStaff,
};
