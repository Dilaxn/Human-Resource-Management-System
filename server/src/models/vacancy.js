const mongoose = require("mongoose");

const vacancy_schema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Vacancy = mongoose.model("Vacancy", vacancy_schema);

module.exports = Vacancy;
