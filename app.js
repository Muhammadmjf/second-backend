const express = require("express");
const studentRouter = require("./api/students/routes");
const petsRouter = require("./api/pets/routes");
const pets = require("./pets");

const app = express();
app.use(express.json());
app.use("/api/students", studentRouter);
app.use("/api/pets", petsRouter);
//  ADD ONE PORT
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`i am runing on port ${PORT}`);
});
