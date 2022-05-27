const mongoose = require("mongoose");

const SchemeCourt = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is demanded"],
      minlength: [2, "Name must have 2 carachters at least."],
      unique: [true, "the name is already registered."],
    },
  },
  { timestamps: true, versionKey: false }
);

const Court = mongoose.model("courts", SchemeCourt);
module.exports = Court;
