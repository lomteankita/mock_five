const express = require("express");
const { employeeModel } = require("../Models/employee.model");
const searchEmployeeRouter = express.Router();

searchEmployeeRouter.get("/search", async (req, res) => {
    const emp=req.query.name;
  try {
    const employees = await employeeModel.find({firstname: emp});
    res.status(200).send(employees);
    
  } catch (err) {
    res.status(400).send({ msg: err.message });
  
  }
});

module.exports = { searchEmployeeRouter };
