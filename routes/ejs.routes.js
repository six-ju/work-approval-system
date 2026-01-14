const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  try {
    res.render("index.ejs", { components: "login" });
  } catch (error) {
    console.log(error)
    next(error)
  }
});

module.exports = router;
