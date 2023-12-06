const express = require("express");
const { createEmployee, AllEmployee, FilterEmployee } = require("./controller")
const Router = express.Router();

Router.post("/create", createEmployee)
Router.get("/", AllEmployee)
Router.get("/Filter", FilterEmployee)
module.exports = Router