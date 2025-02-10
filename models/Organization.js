const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");

const organizationSchema = new Schema(
    {
        _id: { type: String, default: uuidv4 },
        Name: { type: String, required: true },
        Code: { type: String, required: true },
        Address: { type: String },
        City: { type: String },
        State: { type: String },
        Country: { type: String },
        Status: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Organization", organizationSchema);
