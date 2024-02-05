// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// JSON IMPORTS
const projects = require("./projects.json");
const about = require("./about.json");

// APP OBJECT
const app = express();

// MIDDLE WARE
app.use(cors());

// ROUTES
// Test
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Projects
app.get("/projects", (req, res) => {
  res.json(projects);
});

//About
app.get("/about", (req, res) => {
  res.json(about);
});
// LISTENER
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
