const express = require("express");
const router = express.Router();

// Getters
router.get("/", (req, res) => {
  res.render("login");
});

router.get("/register/", (req, res) => {
  res.render("register");
});

// Posters
router.post("/", (req, res) => {
  console.log("Will log in the user!");
  res.redirect("../");
});

module.exports = router;
