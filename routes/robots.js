const express = require("express");
const router = express.Router();
const Robot = require("../models/Robot");

// Get all robots

router.get("/", (req, res) => {
  Robot.find()
    .then(robots => res.json(robots))
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  const { name, username, email } = req.body;
  const newRobot = { name, username, email };

  Robot.create(newRobot)
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Robot.findById({ _id: id })
    .then(robot => res.json(robot))
    .catch(err => console.log(err));
});

router.put(":/id", (req, res) => {
  const { id } = req.params;
  const toUpdate = {};
  const updateableFields = ["name", "username", "email"];

  updateableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });

  Robot.findByIdAndUpdate({ _id: id }, toUpdate, { new: true })
    .then(robot => res.json(robot))
    .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Robot.findByIdAndRemove({ _id: id })
    .then(() => res.status(204))
    .catch(err => console.log(err));
});

module.exports = router;
