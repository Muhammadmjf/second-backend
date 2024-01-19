const express = require("express");
const {
  updateStudentById,
  getAllStudents,
  getStudentByID,
  createStudent,
  deleteStudentByID,
} = require("./controllers");

const routes = express.Router();

routes.put("/:id", updateStudentById);
routes.get("/", getAllStudents);
routes.get(":id", getStudentByID);
routes.post("/", createStudent);
routes.delete("/:id", deleteStudentByID);

module.exports = routes;
