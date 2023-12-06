const { database } = require("./db")
const employees = database().collection('employee')

const createEmployee = async (req, res) => {
    try {
        const data = req.body
        console.log(data)
        if (!data.contactInfo || !data.department || !data.lastCompany) {
            res.status(500).json({ msg: "Please fill" })
        }


        const isExist = await employees.findOne({ contactInfo: data.contactInfo })
        if (isExist) {
            return res.status(500).json({ msg: "This Employee already Registered" })
        }
        else {
            const employee = await employees.insertOne(data)
            res.status(200).json({ success: true, msg: "Employee created successfully", data: employee })
        }
    }
    catch (error) {
        console.log("404  error")
    }
}

const AllEmployee = async (req, res) => {
    try {
        const employee = await employees.find().toArray()
        res.status(200).json({ success: true, data: employee })
    } catch (error) {
        console.log(error);
    }

}
const FilterEmployee = async (req, res) => {
    try {
        const { salary, overallExp, yearGrad } = req.query;

        const filterObject = {};

        if (salary) filterObject.salary = { $gte: parseInt(salary) };
        if (overallExp) filterObject.overallExp = { $gt: parseInt(overallExp) };
        if (yearGrad) filterObject.yearGrad = { $gt: parseInt(yearGrad) };

        const data = await employees.find(filterObject).toArray();
        res.status(200).json({
            success: true, data: data
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
    }
}
module.exports = { createEmployee, AllEmployee, FilterEmployee }