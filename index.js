const express = require("express")
const app = express();
const { database, connection } = require("./db")
const employeeRouter = require('./employeeRouter')

app.use(express.json())

app.use(employeeRouter)

app.listen(5880, () => {
    try {
        connection()
        console.log("server started")
        database()
    }
    catch {

    }
})