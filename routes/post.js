const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("post");
});

// Getters
router.get("/create/", (req, res) => {
  res.send("Beep Boop. Page for you to create a post here!");
});

router.get("/view/:postID/", (req, res) => {
  res.send("Oh look, here's a post with the id: " + req.params.postID);
});

router.get("/get/:amount", (req, res) => {
  res.send("Here you go! " + req.params.amount + " posts for you!");
});

// Posters
router.post("/create/", (req, res) => {
  console.log("Get the data from the form and post it to the db ig...");
});

// Putters
router.put("/update/:postID", (req, res) => {
  console.log("Updating the post!");
});

// Deleters
router.delete("/delete/:postID", (req, res) => {
  console.log("they who wish to delete is the author of the post!");
});

module.exports = router;
