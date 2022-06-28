const router = require("express").Router();
const Movie = require("./../models/Movie.model");
const Celebrity = require("./../models/Celebrity.model");
require("../db");

// crear
router.get("/movies/create", (req, res, next) =>
  Celebrity.find()
    .then((response) => {
      console.log(response);
      res.render("movies/new-movie", { response });
    })
    .catch((err) => {
      next(err);
    })
);

router.post("/movies/create", (req, res, next) => {
  console.log(req.body);
  const { title, genre, plot, cast } = req.body;

  Movie.create({ title, genre, plot, cast })

    .then(() => res.redirect("/movies"))
    .catch((error) => res.render("movies/new-movie"));
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((response) => {
      console.log(response);
      res.render("movies/movies.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
