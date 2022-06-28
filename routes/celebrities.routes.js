// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");
require("../db");

// all your routes here
router.get("/celebrities/create", (req, res, next) =>
  res.render("celebrities/new-celebrity")
);

router.post("/celebrities/create", (req, res, next) => {
  console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })

    .then(() => res.redirect("/celebrities"))
    .catch((error) => res.render("celebrities/new-celebrity"));
});
module.exports = router;
