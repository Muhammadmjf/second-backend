let pets = require("../../pets");

//all student
const getAllpets = (req, res) => {
  return res.json(pets);
};
///

const getpetsByID = (req, res) => {
  const id = req.params.id;
  const pet = pets.find((pet) => {
    return pet.id == id;
  });
  if (!pet)
    return res
      .state(404)
      .json({ message: `pet with the id ${id},was not found` });
  return res.status(200).json(pet);
};

// add new student from body//
const createpets = (req, res) => {
  pets.push({
    id: pets[pets.length - 1].id + 1,
    name: req.body.name,
    color: req.body.color,
  });
  return res.json(pets);
};
// DElete item
const deletepetsByID = (req, res) => {
  const id = req.params.id;
  pets = pets.filter((pet) => {
    return pet.id != id;
  });
  return res.status(200).json(pets);
};
///update
const updatepetsById = (req, res) => {
  const id = req.params.id;
  const { name, color } = req.body;
  const pet = pets.find((pet) => {
    return pet.id == id;
  });
  if (!pet)
    return res
      .status(200)
      .json({ msg: ` pet with the id:${id}was not found!` });
  pet.name = name ? name : pet.name;
  pet.color = color ? color : pet.color;
};
module.exports = {
  getAllpets,
  createpets,
  deletepetsByID,
  getpetsByID,
  updatepetsById,
};
