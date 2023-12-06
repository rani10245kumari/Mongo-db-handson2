const express = require("express");

const userRouter = express.Router();

userRouter.get("", register);
userRouter.get("", EmployeeWithSalary);
userRouter.get("", listOf);
userRouter.get("", greaterSalary);
userRouter.get("", salary);
userRouter.get("", deleteemployee);
module.exports = userRouter;