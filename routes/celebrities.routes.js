const express = require("express");
const Celebrity = require("../models/celebrity.model");
const router = express.Router();
//requestAnimationFrame("../db");

router.get("/celebrities/create", (req, res, next) =>
  res.render("celebrities/new-celebrity.hbs")
);

router.post("/celebrities/create", (req, res, next) => {
  console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })

    .then(() => res.redirect("/celebrities"))
    .catch((error) => res.render("celebrities/new-celebrity.hbs"));
});
module.exports = router;
