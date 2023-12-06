const { MongoClient } = require("mongodb")
//const mongocloudurl = "mongodb+srv://ranik10245:ranik10245@cluster0.amponrd.mongodb.net/?retryWrites=true&w=majority"
const mongodburl = "mongodb://127.0.0.1:27017"
const mongoserver = new MongoClient(mongodburl);
const connection = async () => {
    try {
        await mongoserver.connect();
        console.log("connnection done");
    }
    catch (err) {
        console.log(`error occured in mongodb ${err}`)
    }
}
function database() {
    try {
        const databas = mongoserver.db('HumanResorce');
        if (databas.collection('employee')) {
            return databas

        }

        else {
            const employees = databas.createCollection('employee')

        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = { connection, database }