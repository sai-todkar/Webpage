    const mongoose = require("mongoose");

    const connect_to_db = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/test-realstate-db")
        .then(() => {
            console.log("Connected to MongoDB!");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });
    };

    module.exports = connect_to_db;