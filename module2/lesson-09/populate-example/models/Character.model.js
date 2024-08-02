const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
});

const CharacterModel = model("Character", characterSchema);
module.exports = CharacterModel;
