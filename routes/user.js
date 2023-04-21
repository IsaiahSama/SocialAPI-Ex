var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Oh wow, the user page, nothing to see here!");
});

// Getters

router.get("/view/:userID/", (req, res) => {
  userID = req.params.userID;
  res.send("Displaying information for user with ID of: " + userID);
});

router.get("/update/", (req, res) => {
  res.render("profile");
});

router.get("/getposts/:userID/", (req, res) => {
  res.send(
    "Some JSON object containting all posts by a specified user with id: " +
      req.params.userID
  );
});

// Posters
router.post("/create/", (req, res, next) => {
  console.log("Creates user in here.");
});

// Putters
router.put("/update/", (req, res) => {
  console.log("Update user information here.");
});

// Deleters
router.delete("/delete/", (req, res) => {
  console.log("Delete this!");
});

module.exports = router;
