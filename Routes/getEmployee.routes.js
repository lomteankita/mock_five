const express = require("express");
const { employeeModel } = require("../Models/employee.model");
const getEmployeeRouter = express.Router();

getEmployeeRouter.get("/", async (req, res) => {
  try {
    const employees = await employeeModel.find();
    res.status(200).send(employees);
     console.log(users)
  } catch (err) {
    res.status(400).send({ msg: err.message });
    
  }
});

module.exports = { getEmployeeRouter };
