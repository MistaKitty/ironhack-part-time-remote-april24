const router = require("express").Router();
const CharacterModel = require("../models/Character.model");

router.get("/all-characters", async (req, res) => {
  const allCharacters = await CharacterModel.find();
  res.render("characters/all-characters", { allCharacters });
});
router.get("/create-a-character", (req, res) => {
  res.render("characters/create-a-character");
});
router.get("/character-detail/:characterId", async (req, res) => {
  const { characterId } = req.params;
  const oneCharacter = await CharacterModel.findById(characterId);
  res.render("characters/character-detail", { oneCharacter });
});

router.post("/create-a-character", async (req, res) => {
  try {
    const newCharacter = await CharacterModel.create(req.body);
    console.log("character created! Nice work", newCharacter);
    res.redirect("/characters/all-characters");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
