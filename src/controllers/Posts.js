const Post = require("../models/Post");

module.exports = {
  async index(req, res) {
    const result = await Post.find();

    return res.json(result);
  },

  async show(req, res) {
    const result = await Post.findById(req.params.id);

    return res.json(result);
  },

  async create(req, res) {
    const result = await Post.create(req.body);

    return res.json(result);
  },

  async update(req, res) {
    const result = await Post.findById(req.params.id);
    
    result.likes++;
    
    result.save();

    return res.json(result);
  }
};
