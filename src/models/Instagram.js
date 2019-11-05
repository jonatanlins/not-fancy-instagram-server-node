const mongoose = require("mongoose");

const InstagramSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    local: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },

  {
    timestamps: true
  }
);

module.exports = mongoose.model("Instagram", InstagramSchema);
