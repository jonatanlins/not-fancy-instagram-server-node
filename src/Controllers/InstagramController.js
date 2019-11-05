const mongoose = require("mongoose");

const Instagram = mongoose.model("Instagram");

module.exports = {
  async index(req, res) {
    const instagrao = await Instagram.find();

    return res.json(instagrao);
  },

  async show(req, res) {
    const instagran = await Instagram.findById(req.params.id);

    return res.json(instagran);
  },

  async store(req, res) {
    const instagrans = await Instagram.create(req.body);

    return res.json(instagrans);
  },

  async update(req, res) {
    const instagram = await Instagram.findById(req.params.id);
    instagram.likes++;

    instagram.save();

    return res.json(instagram);
  }
};
