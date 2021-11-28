const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
require("dotenv").config();
require("./db/mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.send({ message: "Hello from server!" });
});

const vacancy_router = require("./src/routes/vacancy");
const dept_router = require("./src/routes/department");
const user_router = require("./src/routes/user");
const suggestion_router = require("./src/routes/suggestion");
const skill_router = require("./src/routes/skillmanagement");
const resource_router = require("./src/routes/resourcemanagement");

app.use(cors());
app.use(vacancy_router);
app.use(dept_router);
app.use(user_router);
app.use(skill_router);
app.use(suggestion_router);
app.use(resource_router);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});