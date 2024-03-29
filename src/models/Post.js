const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
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
      default: 0,
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

module.exports = mongoose.model("Post", PostSchema);
