const mongoose = require("mongoose")

const connectDb = async () => {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/project-management");
    console.log(`Database connected `.cyan.underline.bold)
}

module.exports = connectDb