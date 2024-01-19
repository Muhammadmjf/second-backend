const express = require("express");
const {
  updatepetsById,
  getAllpets,
  getpetsByID,
  createpets,
  deletepetsByID,
} = require("./controllers");

const routes = express.Router();

routes.put("/:id", updatepetsById);
routes.get("/", getAllpets);
routes.get(":id", getpetsByID);
routes.post("/", createpets);
routes.delete("/:id", deletepetsByID);

module.exports = routes;
