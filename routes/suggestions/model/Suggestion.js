const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  suggestion: {
    type: String,
  },
  likes: {
    type: Number,
  },
  anonymous: {
    type: Boolean,
  },
  timeCreated: {
    type: Date,
  },
});

module.exports = mongoose.model("suggestion", suggestionSchema);
