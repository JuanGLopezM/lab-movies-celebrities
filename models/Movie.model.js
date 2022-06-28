//  Add your code here
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  genre: {
    type: String,
  },
  plot: {
    type: String,
  },
  cast: {
    type: Array,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
