let students = require("../../students");

//all student
const getAllStudents = (req, res) => {
  return res.json(students);
};
///
//get one student(1)
// routes.get("/1", (req, res) => {
//   return res.json(students[0]);
// });
//get one student generate(2)
// routes.get("/:id", (req, res) => {
//   const id = req.params.id;
//   return res.json(students[id]);
// });
///get one student generate(3)

const getStudentByID = (req, res) => {
  const id = req.params.id;
  const student = students.find((student) => {
    return student.id == id;
  });
  if (!student)
    return res
      .state(404)
      .json({ message: `student with the id ${id},was not found` });
  return res.status(200).json(student);
};

// add new student from body//
const createStudent = (req, res) => {
  students.push({
    id: students[students.length - 1].id + 1,
    name: req.body.name,
    grade: req.body.grade,
  });
  return res.json(students);
};
// DElete item
const deleteStudentByID = (req, res) => {
  const id = req.params.id;
  students = students.filter((student) => {
    return student.id != id;
  });
  return res.status(200).json(students);
};
///update
const updateStudentById = (req, res) => {
  const id = req.params.id;
  const { name, grade } = req.body;
  const student = students.find((student) => {
    return student.id == id;
  });
  if (!student)
    return res
      .status(200)
      .json({ msg: ` student with the id:${id}was not found!` });
  student.name = name ? name : student.name;
  student.grade = grade ? grade : student.grade;
};
module.exports = {
  getAllStudents,
  createStudent,
  deleteStudentByID,
  getStudentByID,
  updateStudentById,
};
