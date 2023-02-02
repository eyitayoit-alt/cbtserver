const mongoose = require('mongoose')
require('dotenv').config()

const MONGOOSE_URL ='mongodb://127.0.0.1:27017/exams' ;

const connectToDb = () => {
    mongoose.connect(MONGOOSE_URL)
    mongoose.connection.on('connected', () => {
        console.log("connected to MongoDb successfully")
    })
    mongoose.connection.on('error', (error) => {
        console.log("An error occurred", error)
    })
}

module.exports = connectToDb
